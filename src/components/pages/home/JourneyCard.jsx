import Image from "next/image";
import Link from "next/link";
import React from "react";

function JourneyCard({ title, icon, description, link, href }) {
  return (
    <div className="flex text-center justify-center flex-col items-center">
      <Image
        src={icon}
        width={64}
        height={64}
        className="w-16 h-16 "
        alt="icon"
      />
      <h5 className="text-base mt-9 font-Yeseva">{title}</h5>
      <p className="text-sm font-jakarta leading-7 font-medium mt-3">
        {description}
      </p>
      <Link
        href={href}
        className="font-bold text-cardbg underline font-jakarta leading-7 "
      >
        {link}
      </Link>
    </div>
  );
}

export default JourneyCard;
