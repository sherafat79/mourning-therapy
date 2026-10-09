const API_BASE_URL = "https://api.sahraembodiment.com";

// Testimonials are managed in the admin panel. Returns [] when the API is unreachable or has none,
// so callers can fall back to the built-in copy in the dictionaries.
export async function getTestimonials(locale = "fa") {
  try {
    const res = await fetch(`${API_BASE_URL}/testimonials/?lang=${locale}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.map(({ name, role, text }) => ({ name, role: role ?? "", text }));
  } catch {
    return [];
  }
}
