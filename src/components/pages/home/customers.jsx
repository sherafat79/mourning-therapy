"use client";
import Image from "next/image";
import React, {useCallback, useRef} from "react";
import leftIcon from "@/assets/images/icons/left.svg";
import rightIcon from "@/assets/images/icons/right.svg";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import "swiper/css/pagination";
import { useI18n } from "@/i18n/provider";

function Customers({ items }) {
  const { t, rtl } = useI18n();
  const h = t.home.testimonials;
  const sliderRef = useRef(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);
  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="text-black py-16">
      <div className="text-center mb-12">
        <p className="text-xs tracking-widest text-cardbg mb-3 font-medium">
          {h.eyebrow}
        </p>
        <h2 className="font-Yeseva font-normal text-[2rem] leading-9">{h.title}</h2>
      </div>
      <div className="flex items-center justify-between gap-6 md:w-[80%] w-full p-4 md:p-0 mx-auto">
        {/* Next Button (Hidden on mobile, visible on desktop) */}
        <button
          onClick={rtl ? handleNext : handlePrev}
          className="hidden md:flex w-12 h-12 items-center justify-center rounded-full bg-white hover:bg-brown border border-line shadow-sm hover:scale-105 active:scale-95 transition-all duration-300 ease-out flex-shrink-0"
          aria-label={rtl ? h.next : h.prev}
        >
          <Image
            src={rtl ? rightIcon : leftIcon}
            width={24}
            height={24}
            alt={rtl ? h.nextAlt : h.prevAlt}
            className="h-6 w-6"
          />
        </button>

        <div className="flex-grow overflow-hidden px-2 w-full">
          <Swiper
            modules={[Navigation, Pagination]}
            ref={sliderRef}
            spaceBetween={20}
            loop
            pagination={{ clickable: true }}
            slidesPerView={1}
            breakpoints={{
              998: {
                slidesPerView: 2,
                spaceBetween: 32,
              },
            }}
            className="w-full pb-12 pt-4"
          >
            {(items?.length ? items : h.items).map((item, i) => (
              <SwiperSlide key={i} className="h-auto">
                <div className="bg-[#FAF7F4] border border-line/60 rounded-sm p-8 md:p-10 flex flex-col justify-between h-full min-h-[22rem] md:min-h-[20rem] shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
                  {/* Subtle corner gradient hover effect */}
                  <div className="absolute top-0 start-0 w-24 h-24 bg-gradient-to-bl ltr:bg-gradient-to-br from-brown/10 to-transparent pointer-events-none rounded-ee-full group-hover:from-brown/20 transition-all duration-300" />
                  <div className="absolute inset-0 fabric-texture opacity-30 pointer-events-none" />
                  
                  <div className="relative z-10 flex-grow flex flex-col justify-start">
                    <span className="font-Yeseva text-5xl text-cardbg leading-none opacity-40 block mb-2 text-start">“</span>
                    <p className="font-jakarta text-sm md:text-base leading-8 text-black/80 text-start font-normal">
                      {item.text}
                    </p>
                  </div>
                  
                  <div className="relative z-10 mt-6 pt-4 border-t border-line/30 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brown flex items-center justify-center font-Yeseva text-darkBrown font-bold text-sm">
                      {item.name[0]}
                    </div>
                    <div className="text-start">
                      <span className="block text-black font-jakarta text-sm font-semibold">{item.name}</span>
                      <span className="block text-cardbg font-jakarta text-xs mt-0.5">{item.role}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Prev Button (Hidden on mobile, visible on desktop) */}
        <button
          onClick={rtl ? handlePrev : handleNext}
          className="hidden md:flex w-12 h-12 items-center justify-center rounded-full bg-white hover:bg-brown border border-line shadow-sm hover:scale-105 active:scale-95 transition-all duration-300 ease-out flex-shrink-0"
          aria-label={rtl ? h.prev : h.next}
        >
          <Image
            src={rtl ? leftIcon : rightIcon}
            width={24}
            height={24}
            alt={rtl ? h.prevAlt : h.nextAlt}
            className="h-6 w-6"
          />
        </button>
      </div>
    </section>
  );
}

export default Customers;
