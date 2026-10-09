import Image from "next/image";
import Link from "next/link";
import React from "react";
import newLogo from "@/assets/new-logo.png";
import closeIcon from "@/assets/images/icons/close.svg";
import { useSearchParams } from "next/navigation";
import LanguageSwitcher from "./languageSwitcher";
import { useI18n } from "@/i18n/provider";

function MobileHeader({ onClose, path: currentPath }) {
  const { t, path, rtl } = useI18n();
  const searchParams = useSearchParams();
  const type = searchParams.get("type") ?? "individual";
  const activeType = (query) => currentPath === "/services" && type.toLowerCase() === query;
  return (
    <nav
      className={`h-screen w-full animate__animated animate__faster ${
        rtl ? "animate__slideInLeft" : "animate__slideInRight"
      } fixed top-0 end-0 transform z-50 overflow-y-auto bg-mobilebg`}
      aria-label={t.nav.mobileAria}
    >
      <div className="px-5 h-20">
        <div className="w-full h-full md:hidden flex justify-between items-center">
          <button onClick={onClose}>
            <Image className="w-8 h-8" src={closeIcon} width={200} height={100} alt={t.nav.close} />
          </button>
          <Link href={path("/")}>
            <Image src={newLogo} width={160} height={60} alt={t.nav.logoAlt} className="object-contain" />
          </Link>
        </div>
      </div>
      <div className="px-8 font-jakarta font-bold text-black text-xl">
        <ul className="[&>li]:mb-6">
          <li>
            <Link onClick={onClose} className={`${currentPath === "/" && "text-[#8C8C8C]"}`} href={path("/")}>
              {t.nav.home}
            </Link>
          </li>
          <li>
            <Link href={path("/about")} className={`${currentPath === "/about" && "text-[#8C8C8C]"}`} onClick={onClose}>
              {t.nav.about}
            </Link>
          </li>
          <li>
            <Link href={path("/services")} className={`${currentPath === "/services" && "text-[#8C8C8C]"}`} onClick={onClose}>
              {t.nav.services}
            </Link>
            <ul className="[&>li]:mb-6 px-8">
              <li className="mt-6">
                <Link
                  href={path("/services?type=Individual")}
                  className={`${activeType("individual") && "text-cardbg"}`}
                  onClick={onClose}
                >
                  {t.serviceNames.individual}
                </Link>
              </li>
              <li>
                <Link
                  href={path("/services?type=Couples")}
                  className={`${activeType("couples") && "text-cardbg"}`}
                  onClick={onClose}
                >
                  {t.serviceNames.couples}
                </Link>
              </li>
              <li>
                <Link
                  href={path("/services?type=Family")}
                  className={`${activeType("family") && "text-cardbg"}`}
                  onClick={onClose}
                >
                  {t.serviceNames.family}
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href={path("/contact")} onClick={onClose} className={`${currentPath === "/contact" && "text-[#8C8C8C]"}`}>
              {t.nav.contact}
            </Link>
          </li>
          <li>
            <Link href={path("/blog")} onClick={onClose} className={`${currentPath?.startsWith("/blog") && "text-[#8C8C8C]"}`}>
              {t.nav.blog}
            </Link>
          </li>
          <li>
            <LanguageSwitcher onClick={onClose} className="text-cardbg" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MobileHeader;
