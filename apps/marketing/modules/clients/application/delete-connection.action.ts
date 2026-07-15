'use server';

import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export async function deleteConnectionAction(linkId: string) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    // Get current user to verify they belong to the firm
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { success: false, error: 'Yetkisiz erişim.' };

    // Get the link to ensure it belongs to the user's firm
    const { data: link, error: linkError } = await supabase
      .from('accountant_taxpayer_links')
      .select('accounting_firm_id')
      .eq('id', linkId)
      .single();

    if (linkError || !link) {
      return { success: false, error: 'Bağlantı kaydı bulunamadı.' };
    }

    // Verify user is in the firm
    const { data: firmMember } = await supabase
      .from('accounting_firm_members')
      .select('id')
      .eq('accounting_firm_id', link.accounting_firm_id)
      .eq('user_id', user.id)
      .single();

    if (!firmMember) {
      return { success: false, error: 'Bu kaydı silme yetkiniz yok.' };
    }

    // Delete the link
    const { error: deleteError } = await supabase
      .from('accountant_taxpayer_links')
      .delete()
      .eq('id', linkId);

    if (deleteError) {
      console.error('deleteConnectionAction error:', deleteError);
      return { success: false, error: 'Kayıt silinemedi.' };
    }

    return { success: true, message: 'Mükellef kaydı başarıyla silindi.' };
  } catch (error) {
    console.error('deleteConnectionAction Exception:', error);
    return { success: false, error: 'Sunucu hatası oluştu.' };
  }
}
