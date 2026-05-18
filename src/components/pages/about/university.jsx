import React from "react";
import UniversityItem from "./universityItem";

function University() {
  return (
    <section className="flex flex-col md:flex-row justify-center gap-8 items-center w-full px-4 md:px-0">
      <UniversityItem
        title="دانشگاه پپردین"
        description="کارشناسی ارشد روانشناسی بالینی با تأکید بر درمان ازدواج و خانواده"
      />
      <UniversityItem
        title="دانشگاه کالیفرنیا، ایروین"
        description="کارشناسی روانشناسی و رفتار اجتماعی"
      />
    </section>
  );
}

export default University;
