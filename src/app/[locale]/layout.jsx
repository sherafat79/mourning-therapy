import { notFound } from "next/navigation";
import { VazirMatn } from "@/utils/font";
import "animate.css/animate.min.css";
import "../globals.css";
import "swiper/css";
import "swiper/css/navigation";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import { hasLocale, isRtl, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { I18nProvider } from "@/i18n/provider";

const siteUrl = "https://sahra-embodiment.com";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  if (!hasLocale(locale)) return {};
  const { meta } = getDictionary(locale);
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: meta.defaultTitle,
      template: meta.titleTemplate,
    },
    description: meta.description,
    icons: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon/favicon-16x16.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/favicon/apple-touch-icon.png",
      },
    ],
    openGraph: {
      type: "website",
      locale: meta.ogLocale,
      siteName: meta.siteName,
      title: meta.defaultTitle,
      description: meta.description,
      url: siteUrl,
      images: [{ url: "/favicon/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.defaultTitle,
      description: meta.description,
      images: ["/favicon/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <html lang={locale} dir={isRtl(locale) ? "rtl" : "ltr"}>
      <body className={`${VazirMatn.variable}`}>
        <I18nProvider locale={locale} dict={dict}>
          <Header />
          <main>{children}</main>
          <Footer locale={locale} />
        </I18nProvider>
      </body>
    </html>
  );
}
