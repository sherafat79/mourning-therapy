/* eslint-disable react/no-unescaped-entities */
import SideBar from "@/components/pages/contact/sideBar";
import React from "react";
import ContactForm from "@/components/pages/contact/form";

function Contact() {
  return (
    <div className="w-full flex flex-col">
      <div className="h-[27rem] w-full bg-6 bg-no-repeat flex justify-center items-center bg-cover ">
        <h1 className="text-textWhite font-Yeseva text-[2rem]">CONTACT ME</h1>
      </div>
      <div className="flex md:flex-row  flex-col-reverse service-container w-full">
        <SideBar />
        <div className=" md:w-4/5 w-full   md:p-20 p-8 ">
          <div className="flex flex-col gap-10  ">
            <h1 className="text-[2rem] text-black font-Yeseva text-center">
              BOOK YOUR CONSULTATION
            </h1>
            <p className="font-jakarta leading-10  text-center md:text-left text-xl text-textmuted">
              Embark on your path to healthier relationships by booking a
              consultation with us. Simply provide necessary details through our
              online system, and Ariana will be ready to assist you on your
              journey towards understanding and growth. This step could be a
              significant turning point towards the strength and harmony you
              seek in your relationships. Don't hesitate to reach out if you
              require any help during the booking process.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
