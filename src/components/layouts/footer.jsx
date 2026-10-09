import Link from "next/link";
import React from "react";
import newLogo from "@/assets/new-logo.png";
import Image from "next/image";
import { getDictionary } from "@/i18n/dictionaries";
import { format, localePath } from "@/i18n/config";

function Footer({ locale }) {
  const { nav, footer } = getDictionary(locale);
  const linkClass = "text-sm ease-out duration-200 hover:text-cardbg text-black font-semibold leading-7";
  return (
    <footer className="w-full static bottom-0 footer-bg bg-no-repeat bg-cover">
      <div className="w-3/4 pt-11 pb-4 mx-auto">
        <div className="flex flex-col md:flex-row md:justify-start md:items-start justify-center items-center md:gap-[5.75rem] gap-8">
          <nav className="flex items-center md:items-start flex-col gap-10" aria-label={nav.footerAria}>
            <Link className={linkClass} href={localePath(locale, "/")}>
              {nav.home}
            </Link>
            <Link className={linkClass} href={localePath(locale, "/about")}>
              {nav.about}
            </Link>
            <Link className={linkClass} href={localePath(locale, "/contact")}>
              {nav.bookingForm}
            </Link>
            <Link className={linkClass} href={localePath(locale, "/contact")}>
              {nav.contact}
            </Link>
            <Link className={linkClass} href={localePath(locale, "/blog")}>
              {nav.blog}
            </Link>
          </nav>
          <Link className="block md:hidden" href={localePath(locale, "/")}>
            <Image className="w-auto mx-auto object-contain" src={newLogo} width={160} height={60} alt={nav.logoAlt} />
          </Link>
          <nav className="flex items-center md:items-start flex-col gap-10" aria-label={nav.socialAria}>
            <Link className={linkClass} href={localePath(locale, "/")}>
              {nav.instagram}
            </Link>
            <Link className={linkClass} href={localePath(locale, "/")}>
              {nav.facebook}
            </Link>
            <Link className={linkClass} href={localePath(locale, "/")}>
              {nav.linkedin}
            </Link>
          </nav>
        </div>
      </div>
      <hr className="text-line mt-6 md:mt-14" />
      <p className="font-jakarta py-4 text-base font-bold leading-7 text-center">
        {format(footer.copyright, { year: new Date().getFullYear() })}
      </p>
    </footer>
  );
}

export default Footer;
