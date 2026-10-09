import fa from "./dictionaries/fa";
import en from "./dictionaries/en";
import { defaultLocale } from "./config";

const dictionaries = { fa, en };

// Server-side use only: importing this from a client component would bundle both languages.
export function getDictionary(locale) {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
