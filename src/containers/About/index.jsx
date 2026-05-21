import Info from "@/components/pages/about/info";
import Booking from "@/components/pages/home/booking";
import Area from "../../components/pages/about/area";
import University from "@/components/pages/about/university";
import Manifest from "@/components/pages/about/manifest";

export default function About() {
  return (
    <div className="flex flex-col  md:pb-20  md:gap-[5.75rem] gap-8">
      <Info />
      <Manifest />
      <Area />

      <Booking />
    </div>
  );
}
