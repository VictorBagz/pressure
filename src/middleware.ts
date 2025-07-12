
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Authentication is disabled.
  return NextResponse.next();
}

export const config = {
  // No routes are matched, effectively disabling the middleware.
  matcher: [],
}
