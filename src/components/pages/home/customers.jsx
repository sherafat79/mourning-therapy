"use client";
import Image from "next/image";
import React, {useCallback, useRef} from "react";
import leftIcon from "@/assets/images/icons/left.svg";
import rightIcon from "@/assets/images/icons/right.svg";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";

const testimonials = [
  {
    text: "بعد از چند جلسه‌ای که با شما داشتم خودمم متوجه نشدم چطوری ولی کم‌کم خوابم درست شد. وابستگی‌ای که داشتم و حتی به از بین بردنش نمی‌تونستم فکر کنم کاملاً تغییر کرد. الان آدم پرحرف‌تر و اجتماعی‌تر و آروم‌تری شدم.",
    role: "مراجع",
  },
  {
    text: "من این همه مشاوره و دکتر رفته بودم این چند سال اما هیچ‌کدوم این‌قدر مؤثر نبوده برام. توی این جلسات یاد گرفتم بدنم چی میگه و چه احساسی دارم. احساس امنیت و آرامشم خیلی بیشتر شده.",
    role: "مراجع",
  },
  {
    text: "من یک روزم نمی‌تونستم بدون قرص افسردگی زندگی کنم. الان دو هفته‌ست یک دونه قرصم نخوردم. برای منی که مربی رقص بودم، رقصیدن آرزو شده بود و فکر نمی‌کردم دیگه اون ریحان برگرده. واقعاً حس معجزه دارم.",
    role: "مراجع",
  },
  {
    text: "الان خیلی راحت می‌تونم مرز بندی کنم هم با دوستام هم نزدیکانم. بعد از چند سال تونستم مرز بین رفاقت و همکاری کاری رو قائل بشم که از نظر فکری و بهبود عملکردم عالی بود.",
    role: "مراجع",
  },
  {
    text: "رابطه‌ام با خانواده خیلی بهتر شده با کمال تعجب حدود پنج جلسه. تأثیر این پنج جلسه به مراتب بیشتر از کل جلسات تراپی قبلی بود که رفته بودم.",
    role: "مراجع",
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
    <section className="text-black">
      <div className="text-center mb-10">
        <p className="text-xs tracking-widest text-cardbg mb-3 font-medium">
          TESTIMONIALS
        </p>
        <h2 className="font-Yeseva font-normal text-2xl">تجربه مراجعین</h2>
      </div>
      <div className="flex items-center justify-between h-full md:w-[70%] w-full p-4 md:p-0 mx-auto">
        <button className="w-10 h-6 flex-shrink-0" onClick={handleNext}>
          <Image
            src={rightIcon}
            width={128}
            height={128}
            alt="بعدی"
            className="h-full w-full"
          />
        </button>
        <Swiper
          modules={[Navigation]}
          ref={sliderRef}
          spaceBetween={0}
          loop
          slidesPerView={1}
          className="w-11/12"
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="text-center px-6 py-4">
                {/* Fabric accent mark */}
                <div
                  className="w-10 h-10 rounded-full mx-auto mb-8 breathe"
                  style={{
                    background: "linear-gradient(135deg, #e8ddd4, #c9b8ae)",
                  }}
                />
                <div className="w-8 h-0.5 bg-cardbg mx-auto mb-6" />
                <h3 className="font-Yeseva md:text-xl text-sm leading-relaxed text-black">
                  {item.text}
                </h3>
                <p className="text-cardbg font-jakarta text-base font-medium mt-6">
                  {item.role}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button onClick={handlePrev} className="flex-shrink-0">
          <Image
            src={leftIcon}
            width={128}
            height={128}
            alt="قبلی"
            className="h-full w-full"
          />
        </button>
      </div>
    </section>
  );
}

export default Customers;
