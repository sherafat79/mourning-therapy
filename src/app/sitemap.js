import {getAllPosts} from "@/lib/blog";
import {locales, localePath} from "@/i18n/config";

const baseUrl = "https://sahraembodiment.com";

// Each page is listed once per language, with hreflang alternates pointing at its sibling.
function entry(path, locale, extra) {
  return {
    url: `${baseUrl}${localePath(locale, path)}`,
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        locales.map((l) => [l, `${baseUrl}${localePath(l, path)}`]),
      ),
    },
    ...extra,
  };
}

export default async function sitemap() {
  const staticPages = [
    {path: "/", changeFrequency: "monthly", priority: 1.0},
    {path: "/about", changeFrequency: "monthly", priority: 0.8},
    {path: "/services", changeFrequency: "monthly", priority: 0.8},
    {path: "/blog", changeFrequency: "weekly", priority: 0.9},
    {path: "/contact", changeFrequency: "monthly", priority: 0.7},
  ];

  const postsByLocale = await Promise.all(
    locales.map(async (locale) => [locale, await getAllPosts(undefined, locale)]),
  );

  const urls = [];
  for (const locale of locales) {
    for (const {path, ...extra} of staticPages) {
      urls.push(entry(path, locale, extra));
    }
  }
  for (const [locale, posts] of postsByLocale) {
    for (const post of posts) {
      urls.push(
        entry(`/blog/${post.slug}`, locale, {changeFrequency: "monthly", priority: 0.6}),
      );
    }
  }
  return urls;
}
