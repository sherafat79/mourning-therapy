"use client";
import Input from "@/components/form/input";
import {Field, Form, Formik} from "formik";
import React, {useEffect, useMemo, useState} from "react";
import * as Yup from "yup";
import { useI18n } from "@/i18n/provider";

const API_BASE = "https://api.sahraembodiment.com";

const iranianPhoneRegex = /^(\+98|0098|98|0)?9[0-9]{9}$/;

const buildValidationSchema = (v) =>
  Yup.object({
    name: Yup.string().min(2, v.nameMin).required(v.nameRequired),
    phone: Yup.string().matches(iranianPhoneRegex, v.phoneInvalid).required(v.phoneRequired),
    email: Yup.string().email(v.emailInvalid).nullable(),
  });

function ContactForm() {
  const { t, rtl } = useI18n();
  const f = t.contact.form;
  const validationSchema = useMemo(() => buildValidationSchema(f.validation), [f.validation]);
  const [status, setStatus] = useState("idle");
  const [captcha, setCaptcha] = useState(null);

  const loadCaptcha = async () => {
    try {
      const res = await fetch(`${API_BASE}/contact/captcha`);
      if (res.ok) setCaptcha(await res.json());
    } catch {}
  };

  useEffect(() => {
    loadCaptcha();
  }, []);

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
          captchaAnswer: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, {resetForm}) => {
          if (!captcha) return;
          setStatus("loading");
          try {
            const res = await fetch(`${API_BASE}/contact/`, {
              method: "POST",
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify({
                name: values.name,
                lastname: values.lastname,
                phone: values.phone,
                email: values.email || null,
                contact_method: values.contactMethod,
                news: values.news,
                captcha_token: captcha.token,
                captcha_answer: values.captchaAnswer,
              }),
            });
            if (!res.ok) throw new Error("submit failed");
            setStatus("success");
            resetForm();
            loadCaptcha();
          } catch {
            setStatus("error");
          }
        }}
      >
        {() => (
          <Form className="flex flex-col gap-5">
            <div className="w-full">
              <div className="md:w-1/2 w-full mb-5 md:mb-0 px-2 inline-block">
                <Input name="name" placeholder={f.firstNamePlaceholder} text={f.firstName} />
              </div>
              <div className="md:w-1/2 w-full px-2 inline-block">
                <Input
                  name="lastname"
                  placeholder={f.lastNamePlaceholder}
                  text={f.lastName}
                />
              </div>
            </div>

            <div className="w-full px-2">
              <Input
                name="phone"
                placeholder={f.phonePlaceholder}
                text={f.phone}
                description={f.phoneDescription}
              />
            </div>

            <div className="w-full px-2">
              <Input
                name="email"
                type="email"
                placeholder={f.emailPlaceholder}
                text={f.email}
              />
            </div>

            <div className="w-full px-2">
              <p className="text-xs text-black mb-3 font-medium">
                {f.methodQuestion}
                <sup className="text-[#FF2020]"> *</sup>
              </p>
              <div className="flex gap-6">
                {[
                  {value: "whatsapp", label: f.methods.whatsapp},
                  {value: "telegram", label: f.methods.telegram},
                  {value: "call", label: f.methods.call},
                ].map((opt) => (
                  <label
                    key={opt.value}
                    className="flex items-center gap-2 text-sm cursor-pointer"
                  >
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

            <div className="flex items-center px-2 gap-2">
              <Field
                id="news-checkbox"
                type="checkbox"
                name="news"
                className="w-4 h-4 bg-white border-none rounded accent-darkBrown"
              />
              <label htmlFor="news-checkbox" className="text-sm text-black">
                {f.newsletterBefore}
                <span className="font-bold"> {f.newsletterBrand}</span>
              </label>
            </div>

            <div className="w-full px-2" dir={rtl ? "rtl" : "ltr"}>
              <div className="flex items-center gap-3">
                {captcha ? (
                  <>
                    <span className="text-lg font-bold bg-sand px-4 py-2 rounded select-none">
                      {captcha.question}
                    </span>
                    <Field
                      name="captchaAnswer"
                      placeholder={f.captchaAnswer}
                      className="w-24 p-2 text-sm border border-gray-300 rounded outline-none focus:border-brown"
                    />
                  </>
                ) : (
                  <span className="text-sm text-gray-400">
                    {f.captchaLoading}
                  </span>
                )}
              </div>
            </div>

            {status === "success" && (
              <p className="text-green-700 text-sm text-center">
                {f.success}
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-sm text-center">
                {f.error}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "loading" || !captcha}
              className="font-jakarta hover:bg-line ease-out duration-200 p-3 font-medium text-sm rounded-sm bg-brown flex justify-center items-center w-full mx-auto mt-2 disabled:opacity-50"
            >
              {status === "loading" ? f.submitting : f.submit}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ContactForm;
