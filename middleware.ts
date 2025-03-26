import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Adiciona headers de segurança
  const headers = response.headers;
  
  // Previne clickjacking
  headers.set('X-Frame-Options', 'DENY');
  
  // Habilita proteção XSS do navegador
  headers.set('X-XSS-Protection', '1; mode=block');
  
  // Previne MIME type sniffing
  headers.set('X-Content-Type-Options', 'nosniff');
  
  // Content Security Policy
  headers.set(
    'Content-Security-Policy',
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-eval' 'unsafe-inline'; " +
    "style-src 'self' 'unsafe-inline'; " +
    "img-src 'self' data: https:; " +
    "font-src 'self'; " +
    "connect-src 'self' https:;"
  );
  
  // Referrer Policy
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Permissions Policy
  headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=(), interest-cohort=()'
  );

  return response;
}

export const config = {
  matcher: '/:path*',
}; 