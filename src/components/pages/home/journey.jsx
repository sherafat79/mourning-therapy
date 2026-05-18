import React from "react";
import JourneyCard from "./JourneyCard";
import serviceIcon from "@/assets/images/icons/medical-analysis.svg";
import supportIcon from "@/assets/images/icons/customer-support.svg";

function Journey() {
  return (
    <section className="text-black">
      <div className="text-center mb-12">
        <p className="text-xs tracking-widest text-cardbg mb-3 font-medium">START HERE</p>
        <h2 className="font-Yeseva font-normal leading-9 text-[2rem]">
          چطور شروع کنیم؟
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-16 justify-center w-4/6 mx-auto">
        <JourneyCard
          icon={supportIcon}
          href="/contact"
          title="اولین تماس"
          link="ارسال پیام"
          description="از طریق واتساپ یا فرم تماس پیام بدید. یک گفت‌وگوی کوتاه برای آشنایی و بررسی اینکه این فضا برای شما مناسبه."
        />
        <hr className="text-black w-full md:hidden mt-10" />
        <div className="border-r h-[180px] hidden md:block border-opacity-20 border-black" />
        <JourneyCard
          icon={serviceIcon}
          href="/services"
          title="شروع جلسات"
          link="مشاهده خدمات"
          description="جلسات با توجه به وضعیت و ظرفیت شما تنظیم می‌شوند. آرام، بدون فشار، متناسب با شما."
        />
      </div>
    </section>
  );
}

export default Journey;
