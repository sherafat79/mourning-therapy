"use client";
import Link from "next/link";
import { Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { defaultLocale, localePath, stripLocale } from "@/i18n/config";
import { useI18n } from "@/i18n/provider";

function SwitchAnchor({ search, className, onClick }) {
  const { locale, t } = useI18n();
  const pathname = usePathname();
  const target = locale === defaultLocale ? "en" : defaultLocale;
  const href = localePath(target, stripLocale(pathname)) + (search ? `?${search}` : "");
  return (
    <Link
      href={href}
      hrefLang={target}
      lang={target}
      aria-label={t.nav.switchLanguageAria}
      className={className}
      onClick={onClick}
      prefetch={false}
    >
      {t.nav.switchLanguage}
    </Link>
  );
}

function SwitchAnchorWithSearch(props) {
  return <SwitchAnchor {...props} search={useSearchParams().toString()} />;
}

// useSearchParams() needs a Suspense boundary on statically rendered pages; the fallback is the
// same link without the query string.
export default function LanguageSwitcher({ className, onClick }) {
  return (
    <Suspense fallback={<SwitchAnchor search="" className={className} onClick={onClick} />}>
      <SwitchAnchorWithSearch className={className} onClick={onClick} />
    </Suspense>
  );
}
