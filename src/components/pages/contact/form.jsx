"use client";
import Input from "@/components/form/input";
import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const iranianPhoneRegex = /^(\+98|0098|98|0)?9[0-9]{9}$/;

const validationSchema = Yup.object({
  name: Yup.string().min(2, "نام باید حداقل ۲ حرف باشد").required("نام الزامی است"),
  phone: Yup.string()
    .matches(iranianPhoneRegex, "شماره موبایل معتبر نیست — مثال: ۰۹۱۲۳۴۵۶۷۸۹")
    .required("شماره موبایل الزامی است"),
  email: Yup.string().email("آدرس ایمیل معتبر نیست").nullable(),
});

function ContactForm() {
  return (
    <div className="py-6 px-9 rounded bg-cardbg">
      <Formik
        initialValues={{
          name: "",
          lastname: "",
          phone: "",
          email: "",
          contactMethod: "whatsapp",
          news: false,
        }}
        validationSchema={validationSchema}
        onSubmit={() => {}}
      >
        {({ values }) => (
          <Form className="flex flex-col gap-5">
            {/* Name row */}
            <div className="w-full">
              <div className="md:w-1/2 w-full mb-5 md:mb-0 px-2 inline-block">
                <Input name="name" placeholder="مثال: صحرا" text="نام" />
              </div>
              <div className="md:w-1/2 w-full px-2 inline-block">
                <Input name="lastname" placeholder="مثال: حسینی" text="نام خانوادگی" />
              </div>
            </div>

            {/* Phone */}
            <div className="w-full px-2">
              <Input
                name="phone"
                placeholder="مثال: ۰۹۱۲۳۴۵۶۷۸۹"
                text="شماره موبایل"
                description="برای هماهنگی جلسه با شما تماس گرفته می‌شود"
              />
            </div>

            {/* Email — optional */}
            <div className="w-full px-2">
              <Input
                name="email"
                type="email"
                placeholder="مثال: shoma@email.com"
                text="آدرس ایمیل (اختیاری)"
              />
            </div>

            {/* Preferred contact method */}
            <div className="w-full px-2">
              <p className="text-xs text-black mb-3 font-medium">
                ترجیح می‌دهید از چه طریقی با شما تماس گرفته شود؟
                <sup className="text-[#FF2020]"> *</sup>
              </p>
              <div className="flex gap-6">
                {[
                  { value: "whatsapp", label: "واتساپ" },
                  { value: "telegram", label: "تلگرام" },
                  { value: "call", label: "تماس تلفنی" },
                ].map((opt) => (
                  <label key={opt.value} className="flex items-center gap-2 text-sm cursor-pointer">
                    <Field
                      type="radio"
                      name="contactMethod"
                      value={opt.value}
                      className="accent-darkBrown w-4 h-4"
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>

            {/* Newsletter checkbox */}
            <div className="flex items-center px-2 gap-2">
              <Field
                id="news-checkbox"
                type="checkbox"
                name="news"
                className="w-4 h-4 bg-white border-none rounded accent-darkBrown"
              />
              <label htmlFor="news-checkbox" className="text-sm text-black">
                دریافت مطالب درباره تنظیم هیجانی و کار بدن‌محور از
                <span className="font-bold"> صحرا تجسم</span>
              </label>
            </div>

            <button
              type="submit"
              className="font-jakarta hover:bg-line ease-out duration-200 p-3 font-medium text-sm rounded-sm bg-brown flex justify-center items-center w-full mx-auto mt-2"
            >
              ارسال درخواست
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ContactForm;
