import React from "react";
import { getDictionary } from "@/i18n/dictionaries";

const blockClass = {
  default: "",
  strong: "font-semibold text-darkBrown",
  lead: "pt-4 text-black font-medium",
  quote: "font-Yeseva text-xl md:text-2xl text-darkBrown my-8 py-4 border-y border-line/40 italic",
  closing: "pt-4",
  final: "font-semibold text-black mt-8 text-base md:text-lg border-t border-line/30 pt-6",
};

function Manifest({ locale }) {
  const { manifest } = getDictionary(locale).about;
  return (
    <section className="w-full bg-[#FAF7F4] py-16 md:py-24 text-black border-y border-line/50 relative overflow-hidden">
      <div className="absolute inset-0 fabric-texture opacity-30 pointer-events-none" />
      <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
        <div className="w-10 h-0.5 bg-cardbg mx-auto mb-8" />
        <p className="text-xs tracking-widest text-cardbg mb-6 font-medium">{manifest.eyebrow}</p>

        <div className="font-vazir text-base md:text-lg leading-10 text-textmuted text-center space-y-6">
          {manifest.blocks.map((block, i) => (
            <p key={i} className={blockClass[block.variant ?? "default"]}>
              {block.lines.map((line, j) => (
                <React.Fragment key={j}>
                  {j > 0 && <br className="hidden md:inline" />}
                  {line}
                </React.Fragment>
              ))}
            </p>
          ))}
        </div>

        <div className="w-10 h-0.5 bg-cardbg mx-auto mt-10" />
      </div>
    </section>
  );
}

export default Manifest;
