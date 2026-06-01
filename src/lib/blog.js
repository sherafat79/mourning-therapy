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

function formatReadTime(minutes) {
  const persianNum = String(minutes)
    .split("")
    .map((d) => PERSIAN_DIGITS[d] || d)
    .join("");
  return `${persianNum} دقیقه`;
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function normalizeListItem(item) {
  return {
    title: item.title,
    slug: item.slug,
    author: item.author,
    readTime: formatReadTime(item.time_to_read),
    thumbnail: normalizeBannerUrl(item.banner),
    created_at: formatDate(item.created_at),
  };
}

function normalizeDetail(item) {
  return {
    ...normalizeListItem(item),
    body: item.content,
  };
}

export async function getAllPosts(count) {
  const url = count ? `${API_BASE_URL}/blogs/?count=${count}` : `${API_BASE_URL}/blogs/`;
  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) return [];
  const data = await res.json();
  return data.map(normalizeListItem);
}

export async function getPostBySlug(slug) {
  const res = await fetch(`${API_BASE_URL}/blogs/by-slug/${slug}/`, { next: { revalidate: 3600 } });
  if (!res.ok) return null;
  const data = await res.json();
  return normalizeDetail(data);
}
