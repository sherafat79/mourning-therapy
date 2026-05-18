import Image from "next/image";
import Link from "next/link";
import React from "react";
import newLogo from "@/assets/new-logo.png";
import closeIcon from "@/assets/images/icons/close.svg";
import { useSearchParams } from "next/navigation";

function MobileHeader({ onClose, path }) {
  const searchParams = useSearchParams();
  const type = searchParams.get("type") ?? "individual";
  return (
    <nav className="h-screen w-full animate__animated animate__faster animate__slideInLeft fixed top-0 right-0 transform z-50 overflow-y-auto bg-mobilebg" aria-label="منوی موبایل">
      <div className="px-5 h-20">
        <div className="w-full h-full md:hidden flex justify-between items-center">
          <button onClick={onClose}>
            <Image className="w-8 h-8" src={closeIcon} width={200} height={100} alt="بستن" />
          </button>
          <Link href="/">
            <Image src={newLogo} width={160} height={60} alt="صحرا تجسم" className="object-contain" />
          </Link>
        </div>
      </div>
      <div className="px-8 font-jakarta font-bold text-black text-xl">
        <ul className="[&>li]:mb-6">
          <li>
            <Link onClick={onClose} className={`${path === "/" && "text-[#8C8C8C]"}`} href="/">
              خانه
            </Link>
          </li>
          <li>
            <Link href="/about" className={`${path === "/about" && "text-[#8C8C8C]"}`} onClick={onClose}>
              درباره صحرا
            </Link>
          </li>
          <li>
            <Link href="/services" className={`${path === "/services" && "text-[#8C8C8C]"}`} onClick={onClose}>
              خدمات
            </Link>
            <ul className="[&>li]:mb-6 px-8">
              <li className="mt-6">
                <Link
                  href="/services?type=Individual"
                  className={`${path === "/services" && type.toLowerCase() === "individual" && "text-cardbg"}`}
                  onClick={onClose}
                >
                  جلسات فردی بدن‌محور
                </Link>
              </li>
              <li>
                <Link
                  href="/services?type=Couples"
                  className={`${path === "/services" && type.toLowerCase() === "couples" && "text-cardbg"}`}
                  onClick={onClose}
                >
                  حمایت در تصمیم‌گیری
                </Link>
              </li>
              <li>
                <Link
                  href="/services?type=Family"
                  className={`${path === "/services" && type.toLowerCase() === "family" && "text-cardbg"}`}
                  onClick={onClose}
                >
                  کار هیجانی و سوماتیک
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/contact" onClick={onClose} className={`${path === "/contact" && "text-[#8C8C8C]"}`}>
              تماس
            </Link>
          </li>
          <li>
            <Link href="/blog" onClick={onClose} className={`${path?.startsWith("/blog") && "text-[#8C8C8C]"}`}>
              مقالات
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MobileHeader;
