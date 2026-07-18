'use server';

import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

export async function rejectConnectionAction(linkId: string) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase.rpc('review_connection_request', {
      p_link_id: linkId,
      p_action: 'reject'
    });

    if (error || !data?.success) {
      console.error('rejectConnectionAction Error:', error || data?.error);
      return { success: false, error: data?.error || 'Bağlantı reddedilemedi.' };
    }

    return { success: true, message: 'Bağlantı reddedildi.' };
  } catch (error) {
    console.error('rejectConnectionAction Exception:', error);
    return { success: false, error: 'Sunucu hatası oluştu.' };
  }
}
