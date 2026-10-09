export const locales = ["fa", "en"];
export const defaultLocale = "fa";

export function hasLocale(locale) {
  return locales.includes(locale);
}

export function isRtl(locale) {
  return locale === "fa";
}

// Persian lives at the root ("/about"), every other locale is prefixed ("/en/about").
export function localePath(locale, href = "/") {
  if (locale === defaultLocale) return href;
  return href === "/" ? `/${locale}` : `/${locale}${href}`;
}

export function stripLocale(pathname) {
  for (const locale of locales) {
    if (pathname === `/${locale}`) return "/";
    if (pathname.startsWith(`/${locale}/`)) return pathname.slice(locale.length + 1);
  }
  return pathname;
}

export function format(template, vars = {}) {
  return template.replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? "");
}
