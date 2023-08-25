import Image from "next/image";
import React from "react";
import defaultImage from "@/assets/images/icons/medical-analysis.svg";

function JourneyCard() {
  return (
    <div className="flex text-center justify-center flex-col items-center">
      <Image
        src={defaultImage}
        width={64}
        height={64}
        className="w-16 h-16 "
        alt="icon"
      />
      <h5 className="text-base mt-9 font-Yeseva">
        Compassionate Understanding
      </h5>
      <p className="text-sm font-jakarta leading-7 font-medium mt-3">
        Book your free consultation and let our supportive process guide you
        towards positive changes and well-being.
      </p>
    </div>
  );
}

export default JourneyCard;
