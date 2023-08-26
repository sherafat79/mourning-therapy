import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="   w-full static bottom-0 bg-brown">
      <div className="w-3/4 pt-11 pb-4 footer-bg  bg-no-repeat bg-right  mx-auto">
        <div className="flex gap-[5.75rem] ">
          <div className="flex flex-col gap-10">
            <Link
              className="text-sm text-black font-semibold leading-7 capitalize "
              href="/"
            >
              HOME
            </Link>{" "}
            <Link
              className="text-sm text-black font-semibold leading-7 capitalize "
              href="/about"
            >
              ABOUT ME
            </Link>{" "}
            <Link
              className="text-sm text-black font-semibold leading-7 capitalize "
              href="/"
            >
              FORM
            </Link>{" "}
            <Link
              className="text-sm text-black font-semibold leading-7 capitalize "
              href="/"
            >
              CONTACT
            </Link>
          </div>
          <div className="flex flex-col gap-10">
            <Link
              className="text-sm text-black font-semibold leading-7 capitalize "
              href="/"
            >
              INSTAGRAM
            </Link>{" "}
            <Link
              className="text-sm text-black font-semibold leading-7 capitalize "
              href="/"
            >
              FACEBOOK
            </Link>{" "}
            <Link
              className="text-sm text-black font-semibold leading-7 capitalize "
              href="/"
            >
              LINKEDIN
            </Link>{" "}
          </div>
        </div>
        <hr className="text-line mt-14" />
        <p className="font-jakarta mt-4 text-base font-extrabold leading-7 text-center">
          © 2023, All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
