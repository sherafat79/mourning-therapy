/* eslint-disable react/no-unescaped-entities */

import Info from "@/components/pages/about/info";
import Booking from "@/components/pages/home/booking";
import Area from "./area";
import University from "@/components/pages/about/university";

export default function about() {
  return (
    <div className="flex flex-col  gap-[5.75rem]">
      <Info />
      <Area />
      <University />
      <Booking />
    </div>
  );
}
