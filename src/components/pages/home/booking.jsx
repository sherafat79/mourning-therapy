import Link from "next/link";
import React from "react";

function Booking() {
  return (
    <section className="p-12 mx-auto flex flex-col bg-cardbg md:gap-8 gap-6 md:w-3/4 fabric-texture relative overflow-hidden">
      {/* Decorative fabric ripple */}
      <div
        className="absolute -top-16 -left-16 w-64 h-64 opacity-10 gentle-ripple pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #fff 0%, transparent 70%)" }}
      />
      <div className="w-10 h-0.5 bg-white opacity-60 mx-auto" />
      <h2 className="font-Yeseva text-center font-normal leading-relaxed text-3xl text-white">
        اگر احساس می‌کنید وقتشه — یک قدم کوچک کافیه.
      </h2>
      <p className="font-jakarta text-center text-sm leading-8 text-white opacity-80">
        لازم نیست همه چیز روشن باشد. همین که اینجایید، کافیه.
      </p>
      <Link
        href="/contact"
        className="font-jakarta hover:bg-line ease-out duration-300 leading-7 p-2 font-semibold text-sm rounded-sm bg-brown flex justify-center items-center md:w-2/5 w-full mx-auto"
      >
        شروع مشاوره
      </Link>
    </section>
  );
}

export default Booking;
