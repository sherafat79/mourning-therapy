import localFont from "next/font/local";

export const VazirMatn = localFont({
  src: [
    {
      path: "../assets/fonts/vazirmatn/Vazirmatn.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/vazirmatn/Vazirmatn-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/vazirmatn/Vazirmatn-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/vazirmatn/Vazirmatn-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-vazir-matn",
  display: "swap",
});
