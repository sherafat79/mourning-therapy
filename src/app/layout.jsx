import { YesevaOne, PlusJakarta } from "@/utils/font";
import "animate.css/animate.min.css";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";

export const metadata = {
  title: "mourning therapy",
  description:
    "Healing begins with you; embrace your journey and together, we'll unravel the rest.",
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${YesevaOne.variable} ${PlusJakarta.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
