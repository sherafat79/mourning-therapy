"use client";
import React from "react";
import Image from "next/image";

function Info() {
  return (
    <section className="flex flex-col md:flex-row bg-brown gap-12 items-center justify-center w-full px-6 py-12 md:px-24 md:py-24">
      {/* Portrait panel */}
      <div className="md:w-2/5 w-full animate__animated animate__zoomIn">
        <div className="breathe w-full aspect-[3/4] rounded-sm relative overflow-hidden">
          <Image
            src="/images/info.jpeg"
            alt="صحرا حسینی"
            fill
            className="object-cover"
            sizes="(max-width: 998px) 100vw, 50vw"
            priority
          />
          <div className="absolute inset-0 fabric-texture" />
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 rounded-full opacity-25 gentle-ripple"
            style={{
              background:
                "radial-gradient(ellipse, #fdfaf7 0%, transparent 65%)",
            }}
          />
          {/* Subtle name watermark */}
          <div className="absolute bottom-8 right-8 text-right z-10">
            <p className="text-white/80 font-Yeseva text-sm drop-shadow-md">
              صحرا حسینی
            </p>
            <div className="w-8 h-0.5 bg-white/60 mt-1" />
          </div>
        </div>
      </div>

      <div className="md:w-1/2 text-sm font-jakarta leading-8 md:px-4">
        <div className="animate__fadeIn animate__animated">
          <p className="text-xs tracking-widest text-cardbg mb-4 font-medium">
            ABOUT
          </p>
          <h1 className="font-Yeseva text-center md:text-right font-normal leading-9 mb-6 text-[2rem]">
            صحرا حسینی
          </h1>
          <p className="text-textmuted">
            من یک درمانگر بدن‌محور و هیجانی هستم. در کارم، به جای اصلاح سریع یا
            فشار برای تغییر، با بدن، هیجان و تجربه‌ی زنده‌ی فرد کار می‌کنم.
          </p>
          <br />
          <p className="text-textmuted">
            اگر احساس می‌کنید مدام درگیر اضطراب، بی‌قراری، خستگی عاطفی، تکرار
            رابطه‌های فرساینده یا فشارهایی هستید که فقط با فکر حل نمی‌شوند، این
            فضا می‌تواند برای شما مفید باشد.
          </p>
          <br />
          <p className="text-textmuted">
            در این رویکرد فقط درباره مشکلات صحبت نمی‌کنیم؛ کم‌کم یاد می‌گیریم
            واکنش‌های بدن، احساس امنیت، تنش، قطع شدن از خود و الگوهای عمیق‌تر را
            هم ببینیم.
          </p>
          <br />
          <p className="text-textmuted">
            تغییر وقتی ماندگار است که از درون احساس امنیت شروع شود، نه از اجبار
            ذهن. روند جلسات با توجه به وضعیت و ظرفیت هر فرد تنظیم می‌شود تا فشار
            اضافه‌ای به سیستم عصبی وارد نشود.
          </p>
          <div className="w-8 h-0.5 bg-cardbg mt-8" />
        </div>
      </div>
    </section>
  );
}

export default Info;
