import ServicesContainer from "@/containers/Services";
import React from "react";
import { pageMetadata } from "@/i18n/metadata";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  return pageMetadata(locale, "services", "/services");
}

async function page({ searchParams }) {
  const { type } = await searchParams;
  return <ServicesContainer type={type ?? "individual"} />;
}

export default page;
