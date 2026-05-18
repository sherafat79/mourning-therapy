import React from "react";
import ServiceCard from "./serviceCard";
import icon from "@/assets/images/icons/discussion.svg";
import iconIndividual from "@/assets/images/icons/tiredness.svg";
import iconFamily from "@/assets/images/icons/social-community.svg";

function Services() {
  return (
    <section className="p-4">
      <div className="text-center mb-14">
        <p className="text-xs tracking-widest text-cardbg mb-3 font-medium">SERVICES</p>
        <h2 className="font-Yeseva text-4xl">خدمات ما</h2>
      </div>
      <div className="flex flex-col md:flex-row items-stretch w-full justify-center gap-6 md:px-40">
        <ServiceCard
          content="کار با اضطراب، فریز، فرسودگی — تنظیم هیجانی و بازسازی حس ایمنی در بدن."
          title="جلسات فردی بدن‌محور"
          icon={iconIndividual}
          href="/services?type=Individual"
          link="بیشتر بدانید"
        />
        <ServiceCard
          content="همراهی در تصمیم‌های مهم زندگی — رابطه، کار، جابه‌جایی — با آگاهی از الگوهای درونی."
          title="حمایت در تصمیم‌گیری"
          icon={icon}
          href="/services?type=Couples"
          link="بیشتر بدانید"
        />
        <ServiceCard
          content="تنظیم سیستم عصبی، کار با تروما و بازگشت به احساس امنیت از طریق بدن."
          title="کار هیجانی و سوماتیک"
          icon={iconFamily}
          href="/services?type=family"
          link="بیشتر بدانید"
        />
      </div>
    </section>
  );
}

export default Services;
