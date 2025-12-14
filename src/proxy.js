import { NextResponse } from "next/server";
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

let locales = ['en', 'fr'] // Updated to support only English and French
let defaultLocale = 'en' // Set default locale

// Get the preferred locale, similar to the above or using a library
function getLocale(request) {
  // Get the preferred locale from cookies first
  const cookieLocale = request.cookies.get('locale')?.value
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale
  }

  // If no valid cookie locale, use Accept-Language header
  const acceptLanguageHeader = request.headers.get('accept-language')
  let languages;
  if (acceptLanguageHeader) {
    languages = new Negotiator({ headers: { 'accept-language': acceptLanguageHeader } }).languages();
  } else {
    languages = [defaultLocale]; // Fallback if header is missing
  }

  try {
    return match(languages, locales, defaultLocale)
  } catch {
    // Fallback to default locale in case of an error during matching
    return defaultLocale
  }
}

export function proxy(request) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl

  // Paths to exclude from localization.
  // This regex matches:
  // - API routes (/api/)
  // - Next.js internal static files and images (/_next/static/, /_next/image/)
  // - Common public asset folders (/assets/, /images/, /img/, /static/)
  // - Specific files like sitemap.xml, robots.txt, favicon.ico at the root
  // - Any path that ends with a common file extension (e.g., .png, .jpg, .css, .js)
  const EXCLUDED_PATHS_REGEX = /^\/(api\/|_next\/static\/|_next\/image\/|assets\/|images\/|img\/|icons\/|static\/|sitemap\.xml|robots\.txt|favicon\.ico|.*\.(?:png|jpg|jpeg|gif|svg|webp|js|css|json|xml|txt|woff|woff2|ttf|eot|otf|mp4|webm|ogg|mp3|wav|flac|aac))/i;

  if (EXCLUDED_PATHS_REGEX.test(pathname)) {
    return; // Do not perform localization for these paths
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}
