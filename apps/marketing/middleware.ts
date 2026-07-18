import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createServerClient } from "@supabase/ssr";

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Handle explicit /logout route
  if (request.nextUrl.pathname === '/logout') {
    await supabase.auth.signOut();
    const redirectResponse = NextResponse.redirect(new URL('/login', request.url));
    
    // Copy cookies from supabaseResponse to redirectResponse
    supabaseResponse.cookies.getAll().forEach((cookie) => {
      redirectResponse.cookies.set(cookie.name, cookie.value, {
        domain: cookie.domain,
        path: cookie.path,
        maxAge: cookie.maxAge,
        httpOnly: cookie.httpOnly,
        secure: cookie.secure,
        sameSite: cookie.sameSite,
      });
    });
    
    // Fallback manual delete just in case
    redirectResponse.cookies.delete('sb-access-token');
    redirectResponse.cookies.delete('sb-refresh-token');
    
    return redirectResponse;
  }

  const isAuthPage = request.nextUrl.pathname.startsWith('/ledger/login') || request.nextUrl.pathname.startsWith('/ledger/register');
  const isLedgerRoute = request.nextUrl.pathname.startsWith('/ledger');

  // If user is not logged in and tries to access a protected ledger route, redirect to login
  if (!user && isLedgerRoute && !isAuthPage && request.nextUrl.pathname !== '/ledger') {
    return NextResponse.redirect(new URL('/ledger/login', request.url));
  }

  // If user is logged in and tries to access login/register, redirect to dashboard
  if (user && isAuthPage) {
    return NextResponse.redirect(new URL('/ledger/dashboard', request.url));
  }

  return supabaseResponse;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
