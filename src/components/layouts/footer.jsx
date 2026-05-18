import Link from "next/link";
import React from "react";
import newLogo from "@/assets/new-logo.png";
import Image from "next/image";

function Footer() {
  return (
    <footer className="w-full static bottom-0 footer-bg bg-no-repeat bg-cover">
      <div className="w-3/4 pt-11 pb-4 mx-auto">
        <div className="flex flex-col md:flex-row md:justify-start md:items-start justify-center items-center md:gap-[5.75rem] gap-8">
          <nav className="flex items-center md:items-start flex-col gap-10" aria-label="لینک‌های فوتر">
            <Link className="text-sm ease-out duration-200 hover:text-cardbg text-black font-semibold leading-7" href="/">
              خانه
            </Link>
            <Link className="text-sm ease-out duration-200 hover:text-cardbg text-black font-semibold leading-7" href="/about">
              درباره صحرا
            </Link>
            <Link className="text-sm ease-out duration-200 hover:text-cardbg text-black font-semibold leading-7" href="/contact">
              فرم رزرو
            </Link>
            <Link className="text-sm text-black ease-out duration-200 hover:text-cardbg font-semibold leading-7" href="/contact">
              تماس
            </Link>
            <Link className="text-sm text-black ease-out duration-200 hover:text-cardbg font-semibold leading-7" href="/blog">
              مقالات
            </Link>
          </nav>
          <Link className="block md:hidden" href="/">
            <Image className="w-auto mx-auto object-contain" src={newLogo} width={160} height={60} alt="صحرا تجسم" />
          </Link>
          <nav className="flex items-center md:items-start flex-col gap-10" aria-label="شبکه‌های اجتماعی">
            <Link className="text-sm ease-out duration-200 hover:text-cardbg text-black font-semibold leading-7" href="/">
              اینستاگرام
            </Link>
            <Link className="text-sm ease-out duration-200 hover:text-cardbg text-black font-semibold leading-7" href="/">
              فیسبوک
            </Link>
            <Link className="text-sm ease-out duration-200 hover:text-cardbg text-black font-semibold leading-7" href="/">
              لینکدین
            </Link>
          </nav>
        </div>
      </div>
      <hr className="text-line mt-6 md:mt-14" />
      <p className="font-jakarta py-4 text-base font-bold leading-7 text-center">
        © {new Date().getFullYear()}، صحرا تجسم — تمامی حقوق محفوظ است
      </p>
    </footer>
  );
}

export default Footer;
