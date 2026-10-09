import { NextResponse } from "next/server";
import { defaultLocale, locales } from "@/i18n/config";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // "/fa/..." is the same page as "/...": keep a single canonical Persian URL.
  if (pathname === `/${defaultLocale}` || pathname.startsWith(`/${defaultLocale}/`)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(defaultLocale.length + 1) || "/";
    return NextResponse.redirect(url, 308);
  }

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals and any file with an extension (images, sitemap.xml, robots.txt, ...).
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
