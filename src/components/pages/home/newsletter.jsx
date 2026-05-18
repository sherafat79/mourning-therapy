import React from "react";

function NewsLetter() {
  return (
    <section className="mx-auto flex md:flex-row flex-col bg-sand gap-0 md:w-3/4 w-full overflow-hidden rounded-sm">
      {/* Fabric visual panel */}
      <div
        className="md:w-1/2 w-full min-h-[280px] relative overflow-hidden fabric-wave"
        style={{
          background: "linear-gradient(160deg, #e8ddd4 0%, #c9b8ae 50%, #b8a89e 100%)",
        }}
      >
        <div className="absolute inset-0 fabric-texture" />
        <div
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-20 silk-drift"
          style={{ background: "radial-gradient(ellipse, #fdfaf7 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-full h-1/3 opacity-20"
          style={{ background: "linear-gradient(to top, #fdfaf7, transparent)" }}
        />
        {/* Decorative lines */}
        <div className="absolute bottom-10 right-10 space-y-2">
          <div className="w-20 h-0.5 bg-white/40" />
          <div className="w-14 h-0.5 bg-white/25" />
          <div className="w-8 h-0.5 bg-white/15" />
        </div>
      </div>

      <div className="md:w-1/2 md:p-16 p-8 flex flex-col justify-center items-start">
        <div className="w-8 h-0.5 bg-cardbg mb-5" />
        <h2 className="font-Yeseva font-normal leading-9 text-2xl mb-4">خبرنامه</h2>
        <p className="font-jakarta text-sm text-textmuted leading-8 mb-6">
          مطالبی درباره تنظیم هیجانی، کار بدن‌محور و آرامش درونی — هر از گاهی در صندوق ورودی شما.
        </p>
        <div className="flex gap-2 font-jakarta w-full">
          <input
            type="email"
            placeholder="آدرس ایمیل"
            className="bg-white w-8/12 px-4 py-2 rounded-sm placeholder:text-darkBrown text-xs text-right border border-line focus:outline-none focus:border-cardbg transition-colors"
          />
          <button className="bg-brown hover:bg-line ease-out duration-200 w-4/12 rounded-sm flex justify-center items-center px-3 py-2 text-sm font-medium">
            ارسال
          </button>
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
