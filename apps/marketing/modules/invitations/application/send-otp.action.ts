'use server';

import { createClient } from '@/utils/supabase/server';
import { getAdminSupabaseClient } from '@/utils/supabase/admin';
import { cookies } from 'next/headers';

export async function sendOtpAction(phoneE164: string) {
  try {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { error } = await supabase.auth.signInWithOtp({
      phone: phoneE164,
    });

    if (error) {
      console.error('sendOtp Error:', error);
      return { success: false, error: 'Doğrulama kodu gönderilemedi. Lütfen daha sonra tekrar deneyin.' };
    }

    return { success: true };
  } catch (error: any) {
    return { success: false, error: 'Sunucu hatası oluştu.' };
  }
}
