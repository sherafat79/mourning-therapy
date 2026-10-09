import About from "@/containers/About";
import { pageMetadata } from "@/i18n/metadata";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return pageMetadata(locale, "about", "/about");
}

export default async function about({ params }) {
  const { locale } = await params;
  return <About locale={locale} />;
}
