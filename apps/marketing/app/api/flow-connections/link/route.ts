import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import { createAdminClient } from '@/utils/supabase/admin';
import { ConnectionRepository } from '../../../../modules/flow-connections/infrastructure/connection.repository';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    // 1. Authenticate the Mobile App User (Taxpayer)
    const { data: authData, error: authError } = await supabase.auth.getUser();
    
    if (authError || !authData.user) {
      return NextResponse.json(
        { success: false, error: 'Yetkisiz erişim. Lütfen giriş yapın.' },
        { status: 401 }
      );
    }

    const taxpayerId = authData.user.id;

    // 2. Parse the request body
    const body = await request.json();
    const connectionCode = body.connection_code;

    if (!connectionCode || typeof connectionCode !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Müşavir bağlantı kodu (connection_code) gereklidir.' },
        { status: 400 }
      );
    }

    // We use Admin Client for repository operations because the user might not have
    // read access to ledger_accounting_firms table via RLS before being linked.
    const adminSupabase = createAdminClient();
    const repository = new ConnectionRepository(adminSupabase);

    // 3. Look up the accounting firm by the connection code
    const firm = await repository.findFirmByConnectionCode(connectionCode.trim());

    if (!firm) {
      return NextResponse.json(
        { success: false, error: 'Girdiğiniz bağlantı koduna ait bir firma bulunamadı.' },
        { status: 404 }
      );
    }

    // 4. Check if they are already linked or have a pending request
    const alreadyLinked = await repository.checkExistingLink(taxpayerId, firm.id);

    if (alreadyLinked) {
      return NextResponse.json(
        { success: false, error: 'Bu müşavir ile zaten bir bağlantınız veya bekleyen talebiniz bulunuyor.' },
        { status: 400 }
      );
    }

    // 5. Create the pending link
    await repository.createPendingLink(taxpayerId, firm.id, firm.user_id);

    return NextResponse.json(
      { success: true, message: 'Bağlantı talebiniz müşavire iletildi. Onay bekleniyor.' },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Flow Connection API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Sunucu hatası oluştu.' },
      { status: 500 }
    );
  }
}
