import React from "react";
import Contact from "@/containers/contact";
import { pageMetadata } from "@/i18n/metadata";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return pageMetadata(locale, "contact", "/contact");
}

async function Page({ params }) {
  const { locale } = await params;
  return <Contact locale={locale} />;
}

export default Page;
