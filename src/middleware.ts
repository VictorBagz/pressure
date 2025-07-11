
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get('auth-token')?.value;
  const adminAuthToken = process.env.ADMIN_AUTH_TOKEN;

  // If the user is trying to access an admin page and is not authenticated,
  // redirect them to the login page.
  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (!authToken || authToken !== adminAuthToken) {
        // Allow access to the login page itself
        if (request.nextUrl.pathname.startsWith('/admin/login')) {
            return NextResponse.next();
        }
        // Redirect all other /admin routes to the login page
        return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // If the user is authenticated and tries to access the login page,
  // redirect them to the admin dashboard.
  if (request.nextUrl.pathname.startsWith('/admin/login') && authToken && authToken === adminAuthToken) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Match all paths starting with /admin
  matcher: ['/admin/:path*'],
}
