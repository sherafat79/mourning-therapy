import Image from "next/image";
import Link from "next/link";
import React from "react";

function ServiceCard({ icon, title, content, link, href }) {
  return (
    <div className="bg-brown flex flex-col p-8 text-center rounded items-center ">
      <Image
        src={icon}
        width={64}
        height={64}
        className="w-16 mb-8 h-16"
        alt="icon"
      />
      <h5 className="font-Yeseva text-base text-black mb-3">{title}</h5>
      <p className="font-jakarta text-sm font-medium leading-7">{content}</p>
      <Link
        href={href}
        className="underline ease-in-out duration-500 hover:text-darkBrown text-xs font-bold leading-7 "
      >
        {link}
      </Link>
    </div>
  );
}

export default ServiceCard;
