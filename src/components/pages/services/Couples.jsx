"use client";
import React from "react";
import Link from "next/link";
import { useI18n } from "@/i18n/provider";

function Couples() {
  const { t, path } = useI18n();
  const h = t.services;
  return (
    <>
      {h.couples.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
      <p className="font-Yeseva font-normal text-base text-darkBrown">
        {h.pricingBefore}
        <Link href={path("/contact")} className="text-darkBrown underline mx-1">
          {h.pricingLink}
        </Link>
        {h.pricingAfter}
      </p>
    </>
  );
}

export default Couples;
