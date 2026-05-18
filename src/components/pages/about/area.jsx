"use client";
import Image from "next/image";
import React from "react";
import defaultImage from "@/assets/images/icons/area.svg";
import { AnimationOnScroll } from "react-animation-on-scroll";

function Area() {
  return (
    <section className="text-black">
      <div className="flex md:flex-row flex-col items-center gap-16 justify-center md:mt-16 md:w-[60%] p-8 md:p-0 mx-auto">
        <div className="md:w-1/2 w-full">
          <AnimationOnScroll animateIn="animate__fadeIn" duration={1} animateOnce={true}>
            <div className="silk-drift">
              <Image src={defaultImage} width={128} height={128} alt="حوزه‌های تخصصی" className="w-full h-full" />
            </div>
          </AnimationOnScroll>
        </div>
        <div className="text-black md:w-1/2 text-center md:text-right w-full">
          <AnimationOnScroll animateIn="animate__fadeIn" duration={1} animateOnce={true}>
            <div className="w-8 h-0.5 bg-cardbg mb-6 mr-auto md:mr-0" />
            <h2 className="font-Yeseva font-normal text-[2rem] mb-8">
              حوزه‌های کاری
            </h2>
            <div className="font-jakarta text-base leading-9 text-textmuted space-y-2">
              <p>اضطراب و بی‌قراری</p>
              <p>فرسودگی عاطفی</p>
              <p>تروما و PTSD</p>
              <p>تنظیم هیجانی</p>
              <p>الگوهای رابطه‌ای تکراری</p>
              <p>تصمیم‌گیری در موقعیت‌های مهم زندگی</p>
              <p>قطع شدن از خود و بدن</p>
              <p>سوگ و از دست دادن</p>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  );
}

export default Area;
