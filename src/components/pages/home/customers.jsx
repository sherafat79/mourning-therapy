"use client";
import Image from "next/image";
import React, {useCallback, useRef} from "react";
import leftIcon from "@/assets/images/icons/left.svg";
import rightIcon from "@/assets/images/icons/right.svg";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "م. ر.",
    text: "بعد از چند جلسه‌ای که با شما داشتم خودمم متوجه نشدم چطوری ولی کم‌کم خوابم درست شد. وابستگی‌ای که داشتم و حتی به از بین بردنش نمی‌تونستم فکر کنم کاملاً تغییر کرد. الان آدم پرحرف‌تر و اجتماعی‌تر و آروم‌تری شدم.",
    role: "تنظیم هیجانی و سیستم عصبی",
  },
  {
    name: "س. ح.",
    text: "من این همه مشاوره و دکتر رفته بودم این چند سال اما هیچ‌کدوم این‌قدر مؤثر نبوده برام. توی این جلسات یاد گرفتم بدنم چی میگه و چه احساسی دارم. احساس امنیت و آرامشم خیلی بیشتر شده.",
    role: "درمان بدن‌محور و اضطراب",
  },
  {
    name: "ر. م.",
    text: "من یک روزم نمی‌تونستم بدون قرص افسردگی زندگی کنم. الان دو هفته‌ست یک دونه قرصم نخوردم. برای منی که مربی رقص بودم، رقصیدن آرزو شده بود و فکر نمی‌کردم دیگه اون ریحان برگرده. واقعاً حس معجزه دارم.",
    role: "سوگ و بازیابی توان بدنی",
  },
  {
    name: "ن. ک.",
    text: "الان خیلی راحت می‌تونم مرزبندی کنم هم با دوستام هم نزدیکانم. بعد از چند سال تونستم مرز بین رفاقت و همکاری کاری رو قائل بشم که از نظر فکری و بهبود عملکردم عالی بود.",
    role: "مرزبندی و الگوهای رابطه‌ای",
  },
  {
    name: "آ. س.",
    text: "رابطه‌ام با خانواده خیلی بهتر شده با کمال تعجب حدود پنج جلسه. تأثیر این پنج جلسه به مراتب بیشتر از کل جلسات تراپی قبلی بود که رفته بودم.",
    role: "بهبود روابط خانوادگی",
  },
];

function Customers() {
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
          TESTIMONIALS
        </p>
        <h2 className="font-Yeseva font-normal text-[2rem] leading-9">تجربه مراجعین</h2>
      </div>
      <div className="flex items-center justify-between gap-6 md:w-[80%] w-full p-4 md:p-0 mx-auto">
        {/* Next Button (Hidden on mobile, visible on desktop) */}
        <button
          onClick={handleNext}
          className="hidden md:flex w-12 h-12 items-center justify-center rounded-full bg-white hover:bg-brown border border-line shadow-sm hover:scale-105 active:scale-95 transition-all duration-300 ease-out flex-shrink-0"
          aria-label="Next testimonial"
        >
          <Image
            src={rightIcon}
            width={24}
            height={24}
            alt="بعدی"
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
            {testimonials.map((item, i) => (
              <SwiperSlide key={i} className="h-auto">
                <div className="bg-[#FAF7F4] border border-line/60 rounded-sm p-8 md:p-10 flex flex-col justify-between h-full min-h-[22rem] md:min-h-[20rem] shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group">
                  {/* Subtle corner gradient hover effect */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brown/10 to-transparent pointer-events-none rounded-bl-full group-hover:from-brown/20 transition-all duration-300" />
                  <div className="absolute inset-0 fabric-texture opacity-30 pointer-events-none" />
                  
                  <div className="relative z-10 flex-grow flex flex-col justify-start">
                    <span className="font-Yeseva text-5xl text-cardbg leading-none opacity-40 block mb-2 text-right">“</span>
                    <p className="font-jakarta text-sm md:text-base leading-8 text-black/80 text-right font-normal">
                      {item.text}
                    </p>
                  </div>
                  
                  <div className="relative z-10 mt-6 pt-4 border-t border-line/30 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brown flex items-center justify-center font-Yeseva text-darkBrown font-bold text-sm">
                      {item.name[0]}
                    </div>
                    <div className="text-right">
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
          onClick={handlePrev}
          className="hidden md:flex w-12 h-12 items-center justify-center rounded-full bg-white hover:bg-brown border border-line shadow-sm hover:scale-105 active:scale-95 transition-all duration-300 ease-out flex-shrink-0"
          aria-label="Previous testimonial"
        >
          <Image
            src={leftIcon}
            width={24}
            height={24}
            alt="قبلی"
            className="h-6 w-6"
          />
        </button>
      </div>
    </section>
  );
}

export default Customers;
