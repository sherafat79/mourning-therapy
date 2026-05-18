import ServicesContainer from "@/containers/Services";
import React from "react";

export const metadata = {
  title: "خدمات",
  description: "جلسات فردی بدن‌محور، حمایت در تصمیم‌گیری و کار هیجانی و سوماتیک — فضایی برای تنظیم سیستم عصبی و بازگشت به احساس امنیت.",
};

async function page({ searchParams }) {
  const { type } = await searchParams;
  return <ServicesContainer type={type ?? "individual"} />;
}

export default page;
