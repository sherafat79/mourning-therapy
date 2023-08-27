/* eslint-disable react/no-unescaped-entities */

import Info from "@/components/pages/about/info";
import Booking from "@/components/pages/home/booking";
import Area from "../../components/pages/about/area";
import University from "@/components/pages/about/university";

export default function about() {
  return (
    <div className="flex flex-col  md:pb-20  md:gap-[5.75rem] gap-8">
      <Info />
      <Area />
      <University />
      <Booking />
    </div>
  );
}
