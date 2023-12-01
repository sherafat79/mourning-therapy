import Link from "next/link";
import React from "react";

function Booking() {
  return (
    <section className="p-12  flex flex-col bg-cardbg md:gap-2 gap-7 container">
      <h2 className="font-Yeseva text-center font-normal leading-9 text-4xl ">
        Step forward and book a life-changing consultation today. Embrace your
        potential.
      </h2>
      <Link
        href="/contact"
        className="font-jakarta hover:bg-line ease-in-out duration-500  leading-7 md:p-1 p-2 font-semibold mt-14 text-sm rounded bg-brown flex justify-center items-center md:w-3/5 w-full mx-auto"
      >
        BOOK YOUR CONSULTATION
      </Link>
    </section>
  );
}

export default Booking;
