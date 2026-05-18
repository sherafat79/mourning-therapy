import { VazirMatn } from "@/utils/font";
import "animate.css/animate.min.css";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

const siteUrl = "https://sahra-embodiment.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "صحرا تجسم | صحرا حسینی",
    template: "%s | صحرا تجسم",
  },
  description: "درمان بدن‌محور و هیجانی با صحرا حسینی — فضایی برای آرامش، احساس امنیت و تحول از درون.",
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
    locale: "fa_IR",
    siteName: "صحرا تجسم",
    title: "صحرا تجسم | صحرا حسینی",
    description: "درمان بدن‌محور و هیجانی با صحرا حسینی — فضایی برای آرامش، احساس امنیت و تحول از درون.",
    url: siteUrl,
    images: [{ url: "/favicon/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "صحرا تجسم | صحرا حسینی",
    description: "درمان بدن‌محور و هیجانی با صحرا حسینی — فضایی برای آرامش، احساس امنیت و تحول از درون.",
    images: ["/favicon/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${VazirMatn.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
