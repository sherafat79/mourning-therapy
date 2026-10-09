import HomeContainer from "@/containers/Home";
import { pageMetadata } from "@/i18n/metadata";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return pageMetadata(locale, "home", "/");
}

export default async function Home({ params }) {
  const { locale } = await params;
  return <HomeContainer locale={locale} />;
}
