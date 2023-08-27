import Link from "next/link";
import React from "react";

function SideBar() {
  return (
    <div className="w-1/5 font-jakarta text-black bg-side flex flex-col gap-5 side px-16 py-14">
      <div>
        <h5 className="font-bold text-xl mb-4 ">WONDERING ABOUT INSURANCE?</h5>
        <p className="text-base text-textmuted leading-8 mb-5">
          At this time, we are not able to accept insurance as a method of
          payment for our services. We understand the potential inconvenience
          this might pose and want to assure you that we are actively working
          towards integrating insurance compatibility into our system. We
          appreciate your patience and understanding during this time.
        </p>
        <hr className="text-gray" />
      </div>

      <div>
        <h5 className="font-bold text-xl mb-4 ">OFFICE CONTACT</h5>
        <p className="text-base text-textmuted leading-8 mb-4">
          To learn more about our services or schedule an initial appointment:{" "}
          <br />
          <Link href="/" className="underline">
            Book a Phone Consultation
          </Link>
        </p>
        <p className="text-base text-textmuted leading-8 mb-4">
          All other inquiries: <br />
          <Link href="tel:310 330 6899" className="underline">
            Tel: 310 330 6899
          </Link>
        </p>
        <hr className="text-gray" />
      </div>
      <div>
        <h5 className="font-bold text-xl mb-4 ">OPEN HOURS</h5>
        <p className="text-base text-textmuted leading-8 mb-4">
          (By Appointment Only) <br />
          Mon-Fri: 9 AM – 3 PM <br />
          Sat - Sun: Closed
        </p>
      </div>
    </div>
  );
}

export default SideBar;
