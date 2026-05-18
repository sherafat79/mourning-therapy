import React from "react";
import GuidingCard from "./guidingCard";

function Guiding() {
  return (
    <section className="bg-4 py-20 text-black w-full flex justify-center bg-cover bg-no-repeat items-center flex-col fabric-texture">
      <div className="text-center mb-12">
        <p className="text-xs tracking-widest text-darkBrown mb-3 font-medium">PRINCIPLES</p>
        <h2 className="font-Yeseva font-normal leading-9 text-[2rem]">اصول کار ما</h2>
      </div>
      <div className="flex md:flex-row flex-col gap-6 items-stretch justify-center px-6">
        <GuidingCard
          title="بدن را می‌شنویم"
          description="واکنش‌های بدن، تنش، قطع شدن از خود و الگوهای عمیق‌تر را با هم می‌بینیم. لازم نیست از قبل تجربه کار بدن‌محور داشته باشید."
        />
        <GuidingCard
          title="بدون فشار، بدون قضاوت"
          description="شروع آرام و متناسب با ظرفیت هر فرد. قرار نیست قبل از شروع «کاملاً آماده» یا «حال‌خوب» باشید."
        />
        <GuidingCard
          title="تغییر از درون"
          description="تغییر وقتی ماندگار است که از درون احساس امنیت شروع شود. روند جلسات با توجه به وضعیت و ظرفیت هر فرد تنظیم می‌شود."
        />
      </div>
    </section>
  );
}

export default Guiding;
