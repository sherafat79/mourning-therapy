import SideBar from "@/components/pages/contact/sideBar";
import React from "react";
import ContactForm from "@/components/pages/contact/form";

function Contact() {
  return (
    <div className="w-full flex flex-col">
      <div className="h-[27rem] w-full relative overflow-hidden flex justify-center items-center">
        {/* Fabric banner — replaces bg-6.png */}
        <div
          className="absolute inset-0 fabric-wave"
          style={{ background: "linear-gradient(160deg, #c9b8ae 0%, #a89890 40%, #8a7a72 100%)" }}
        >
          <div className="absolute inset-0 fabric-texture" />
          <div
            className="absolute inset-0 opacity-20 silk-drift"
            style={{ background: "radial-gradient(ellipse at 60% 40%, rgba(253,250,247,0.7) 0%, transparent 55%)" }}
          />
        </div>
        <div className="relative text-center">
          <p className="text-xs tracking-widest text-textWhite opacity-60 mb-3 font-medium">CONTACT</p>
          <h1 className="text-textWhite font-Yeseva text-[2rem]">تماس با صحرا</h1>
        </div>
      </div>
      <div className="flex md:flex-row flex-col-reverse service-container w-full">
        <SideBar />
        <div className="md:w-4/5 w-full md:p-20 p-8">
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-xs tracking-widest text-cardbg mb-3 font-medium">START</p>
              <h2 className="text-[2rem] text-black font-Yeseva">
                شروع مشاوره
              </h2>
            </div>
            <p className="font-jakarta leading-9 text-right text-base text-textmuted">
              اطلاعات خود را وارد کنید. صحرا در اولین فرصت از طریق روش تماس انتخابی شما پیام می‌دهد تا یک گفت‌وگوی کوتاه برای آشنایی داشته باشید. لازم نیست همه چیز روشن باشد — همین که اینجایید، کافیه.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
