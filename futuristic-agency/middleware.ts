import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const country = req.geo?.country || 'US'
  const locale = country === 'IR' ? 'fa' : 'en'
  const url = req.nextUrl.clone()

  if (url.pathname === '/') {
    url.pathname = `/${locale}`
    return NextResponse.redirect(url)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/'],
}