const API_BASE_URL = "https://api.sahraembodiment.com";

function normalizeBannerUrl(banner) {
  if (!banner) return null;
  const normalizedPath = banner.replace(/\\/g, "/");
  return `${API_BASE_URL}/${normalizedPath}`;
}

const PERSIAN_DIGITS = {
  0: "۰",
  1: "۱",
  2: "۲",
  3: "۳",
  4: "۴",
  5: "۵",
  6: "۶",
  7: "۷",
  8: "۸",
  9: "۹",
};

// The "read" suffix ("مطالعه" / "read") is added by the page from the dictionary.
function formatReadTime(minutes, locale) {
  if (locale === "en") return `${minutes} min`;
  const persianNum = String(minutes)
    .split("")
    .map((d) => PERSIAN_DIGITS[d] || d)
    .join("");
  return `${persianNum} دقیقه`;
}

function formatDate(dateString, locale) {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale === "en" ? "en-US" : "fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function normalizeListItem(item, locale) {
  return {
    title: item.title,
    slug: item.slug,
    author: item.author,
    readTime: formatReadTime(item.time_to_read, locale),
    thumbnail: normalizeBannerUrl(item.banner),
    created_at: formatDate(item.created_at, locale),
  };
}

function normalizeDetail(item, locale) {
  return {
    ...normalizeListItem(item, locale),
    body: item.content,
  };
}

// English listings only contain articles that have an English translation (the API filters them).
export async function getAllPosts(count, locale = "fa") {
  const params = new URLSearchParams({ lang: locale });
  if (count) params.set("count", count);
  const res = await fetch(`${API_BASE_URL}/blogs/?${params}`, { next: { revalidate: 3600 } });
  if (!res.ok) return [];
  const data = await res.json();
  return data.map((item) => normalizeListItem(item, locale));
}

export async function getPostBySlug(slug, locale = "fa") {
  const res = await fetch(`${API_BASE_URL}/blogs/by-slug/${slug}/?lang=${locale}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return null;
  const data = await res.json();
  return normalizeDetail(data, locale);
}
