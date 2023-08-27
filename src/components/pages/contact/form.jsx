"use client";
import Input from "@/components/form/input";
import { Field, Form, Formik } from "formik";
import React from "react";

function ContactForm() {
  return (
    <div className="py-5 px-9 rounded  bg-cardbg">
      <Formik
        initialValues={{
          name: "",
          lastname: "",
          phone: "",
          email: "",
          news: false,
        }}
      >
        {({}) => (
          <Form className="flex flex-col gap-5">
            <div className="w-full  ">
              <div className="w-1/2 px-2 inline-block ">
                <Input
                  name="name"
                  placeholder="Example: John"
                  text="First name"
                />
              </div>
              <div className="w-1/2 px-2 inline-block ">
                <Input
                  name="lastname"
                  placeholder="Example: Jackson"
                  text="Last name"
                />
              </div>
            </div>
            <div className="w-full px-2 ">
              <Input
                name="phone"
                placeholder="Example: 123 555 6789"
                text="Phone number"
                description="You will receive a text message reminder before your appointment"
              />
            </div>
            <div className="w-full px-2 ">
              <Input
                name="email"
                type="email"
                placeholder="Example: your@email.com"
                text="Phone number"
                description="You will receive a message reminder before your appointment"
              />
            </div>
            <div class="flex items-center px-2 ">
              <Field
                id="link-checkbox"
                type="checkbox"
                name="news"
                class="w-4 h-4 bg-white border-none rounded "
              />
              <label for="link-checkbox" class="ml-2 text-sm text-[#000] ">
                By checking this box, you will receive latest news and content
                <span className="font-bold">from Mourning therapy</span>
              </label>
            </div>
            <h1 className="text-[#000] font-bold px-2 text-xl font-jakarta">
              NOTICE: APPOINTMENTS ARE OFFERED TO CALIFORNIA RESIDENTS ONLY
            </h1>

            <button
              type="submit"
              className="font-jakarta  p-3 font-medium  text-sm rounded bg-brown flex justify-center items-center w-full mx-auto"
            >
              Make appointment
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ContactForm;
