import React from "react";

function Manifest() {
  return (
    <section className="w-full bg-[#FAF7F4] py-16 md:py-24 text-black border-y border-line/50 relative overflow-hidden">
      <div className="absolute inset-0 fabric-texture opacity-30 pointer-events-none" />
      <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
        <div className="w-10 h-0.5 bg-cardbg mx-auto mb-8" />
        <p className="text-xs tracking-widest text-cardbg mb-6 font-medium">ABOUT OUR WORK</p>
        
        <div className="font-vazir text-base md:text-lg leading-10 text-textmuted text-center space-y-6">
          <p>
            ما با آدم‌هایی کار می‌کنیم که می‌خواهند زندگی کنند،
            <br className="hidden md:inline" />
            اما نمی‌توانند حرکت کنند.
          </p>
          <p>
            می‌توانند حرکت کنند،
            <br className="hidden md:inline" />
            اما بین راه می‌ایستند.
          </p>
          <p>
            می‌خواهند مسیر را عوض کنند،
            <br className="hidden md:inline" />
            اما نمی‌دانند به کجا،
            <br className="hidden md:inline" />
            یا اصلاً چطور.
          </p>
          <p>
            می‌خواهند حالشان بهتر شود،
            <br className="hidden md:inline" />
            اما آن چیزی که به دست می‌آید
            <br className="hidden md:inline" />
            آن نیست که می‌خواستند.
          </p>
          <p className="font-semibold text-darkBrown">
            می‌دانند… اما نمی‌شود.
            <br className="hidden md:inline" />
            می‌شود… اما نمی‌توانند.
            <br className="hidden md:inline" />
            می‌خواهند… اما نمی‌توانند.
          </p>
          <p className="pt-4 text-black font-medium">
            و همه‌ی این خواستن‌ها، نشدن‌ها و شدن‌ها
            <br className="hidden md:inline" />
            بالاخره به یک سؤال می‌رسد:
          </p>
          
          <p className="font-Yeseva text-xl md:text-2xl text-darkBrown my-8 py-4 border-y border-line/40 italic">
            «نمی‌دانم چه چیزی در من گیر کرده.»
          </p>
          
          <p className="pt-4">
            اینجا جایی‌ست که با احترام به ریتم بدن،
            <br className="hidden md:inline" />
            بدون اجبار و بدون فشار،
            <br className="hidden md:inline" />
            آدم‌ها به‌تدریج
            <br className="hidden md:inline" />
            ریتم زندگی خودشان را دوباره پیدا می‌کنند.
          </p>
          
          <p className="font-semibold text-black mt-8 text-base md:text-lg border-t border-line/30 pt-6">
            کار ما همراهی بدن‌محور در مسیر تنظیم هیجانی، تصمیم‌گیری و بازگشت تدریجی به زندگی است.
          </p>
        </div>
        
        <div className="w-10 h-0.5 bg-cardbg mx-auto mt-10" />
      </div>
    </section>
  );
}

export default Manifest;
