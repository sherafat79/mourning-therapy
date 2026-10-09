import { defaultLocale, localePath, locales } from "./config";
import { getDictionary } from "./dictionaries";

// Canonical + hreflang alternates for a page, e.g. pageAlternates("en", "/about").
export function pageAlternates(locale, path = "/") {
  const languages = Object.fromEntries(locales.map((l) => [l, localePath(l, path)]));
  languages["x-default"] = localePath(defaultLocale, path);
  return { canonical: localePath(locale, path), languages };
}

export function pageMetadata(locale, key, path) {
  const { title, description } = getDictionary(locale).meta.pages[key];
  return { title, description, alternates: pageAlternates(locale, path) };
}
