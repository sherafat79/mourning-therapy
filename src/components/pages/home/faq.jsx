"use client";
import React, { useState } from "react";

const faqs = [
  {
    q: "آیا این رویکرد برای من مناسبه؟",
    a: "اگر احساس می‌کنید مدام درگیر اضطراب، بی‌قراری، خستگی عاطفی، تکرار رابطه‌های فرساینده یا فشارهایی هستید که فقط با فکر حل نمی‌شوند، این فضا می‌تواند برای شما مفید باشد. در این رویکرد فقط درباره مشکلات صحبت نمی‌کنیم؛ کم‌کم یاد می‌گیریم واکنش‌های بدن، احساس امنیت، تنش، قطع شدن از خود و الگوهای عمیق‌تر را هم ببینیم. لازم نیست از قبل تجربه کار بدن‌محور داشته باشید.",
  },
  {
    q: "جلسات چطور برگزار میشه؟",
    a: "جلسات به‌صورت گفت‌وگو، مشاهده بدن، تنظیم سیستم عصبی و تمرین‌های ساده بدن‌محور پیش می‌روند. بعضی جلسه‌ها بیشتر حول صحبت و شناخت الگوهاست، و بعضی وقت‌ها تمرکز بیشتر روی تجربه لحظه‌به‌لحظه بدن، احساسات و واکنش‌های درونی قرار می‌گیرد. هدف این نیست که چیزی را به زور تغییر بدهیم.",
  },
  {
    q: "اگه الان حالم خیلی خوب نیست می‌تونم شروع کنم؟",
    a: "بله. خیلی از آدم‌ها زمانی مراجعه می‌کنند که احساس می‌کنند خسته، overwhelmed، مضطرب یا از خودشان دور شده‌اند. قرار نیست قبل از شروع «کاملاً آماده» یا «حال‌خوب» باشید. اتفاقاً بخشی از کار، از همان جایی شروع می‌شود که آدم احساس می‌کند دیگر نمی‌تواند همه‌چیز را فقط با کنترل، فکر کردن یا تحمل جلو ببرد. روند جلسات با توجه به وضعیت و ظرفیت هر فرد تنظیم می‌شود.",
  },
];

function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <div
      className={`border-b border-line transition-all duration-300 ease-out ${isOpen ? "pb-6" : "pb-0"}`}
    >
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-5 text-right gap-4 group"
      >
        <span className="font-Yeseva text-base text-black group-hover:text-darkBrown transition-colors duration-300">
          {q}
        </span>
        <span
          className={`text-cardbg text-xl font-light transition-transform duration-300 ease-out flex-shrink-0 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="font-jakarta text-sm leading-8 text-textmuted pb-2 fabric-wave">
          {a}
        </p>
      </div>
    </div>
  );
}

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="text-black md:w-3/5 w-full mx-auto px-6 md:px-0">
      <div className="text-center mb-12">
        <p className="text-xs tracking-widest text-cardbg mb-3 font-medium">FAQ</p>
        <h2 className="font-Yeseva font-normal leading-9 text-[2rem]">سوالات متداول</h2>
      </div>
      <div>
        {faqs.map((item, i) => (
          <FaqItem
            key={i}
            q={item.q}
            a={item.a}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
}

export default Faq;
