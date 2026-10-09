"use client";
import React, { useState } from "react";
import { useI18n } from "@/i18n/provider";

function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <div
      className={`border-b border-line transition-all duration-300 ease-out ${isOpen ? "pb-6" : "pb-0"}`}
    >
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-5 text-start gap-4 group"
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
  const { t } = useI18n();
  const h = t.home.faq;
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="text-black md:w-3/5 w-full mx-auto px-6 md:px-0">
      <div className="text-center mb-12">
        <p className="text-xs tracking-widest text-cardbg mb-3 font-medium">{h.eyebrow}</p>
        <h2 className="font-Yeseva font-normal leading-9 text-[2rem]">{h.title}</h2>
      </div>
      <div>
        {h.items.map((item, i) => (
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
