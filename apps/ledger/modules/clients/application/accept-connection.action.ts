'use server';

import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export async function acceptConnectionAction(linkId: string) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase.rpc('review_connection_request', {
      p_link_id: linkId,
      p_action: 'accept'
    });

    if (error || !data?.success) {
      console.error('acceptConnectionAction Error:', error || data?.error);
      return { success: false, error: data?.error || 'Bağlantı onaylanamadı.' };
    }

    return { success: true, message: 'Bağlantı başarıyla onaylandı.' };
  } catch (error) {
    console.error('acceptConnectionAction Exception:', error);
    return { success: false, error: 'Sunucu hatası oluştu.' };
  }
}
