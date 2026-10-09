import Link from "next/link";
import React from "react";
import { getDictionary } from "@/i18n/dictionaries";
import { localePath } from "@/i18n/config";

function SideBar({ locale }) {
  const t = getDictionary(locale).contact.sidebar;
  return (
    <aside className="md:w-1/5 w-full font-jakarta text-black bg-side flex flex-col gap-6 side px-10 py-14">
      <div>
        <div className="w-6 h-0.5 text-start bg-cardbg mb-4" />
        <h3 className="font-bold text-base mb-3">{t.directTitle}</h3>
        <p className="text-sm text-textmuted leading-8 mb-4">
          {t.directText}
        </p>
        <div className="mb-3 flex flex-col gap-2 items-start text-start">
          <div className="text-sm text-black">
            <span className="font-bold">{t.doctorLabel}</span>
            <a href="tel:09131582544" dir="ltr" className="underline ltr mx-2 inline-block">
              09131582544
            </a>
          </div>
          <div className="text-sm text-black mt-1">
            <span className="font-bold">{t.bookingLabel}</span>
            <a href="tel:09385720172" dir="ltr" className="underline mx-2 inline-block">
              09385720172
            </a>
          </div>
        </div>
        <hr className="text-line mt-5" />
      </div>

      <div>
        <h3 className="font-bold text-base mb-3">{t.firstStepTitle}</h3>
        <p className="text-sm text-textmuted leading-8 mb-4">
          {t.firstStepText}
        </p>
        <hr className="text-line" />
      </div>

      <div>
        <h3 className="font-bold text-base mb-3">{t.hoursTitle}</h3>
        <p className="text-sm text-textmuted leading-8">
          {t.hoursDays}
          <br />
          {t.hoursTime}
          <br />
          <span className="text-xs opacity-70">{t.hoursTimezone}</span>
        </p>
      </div>

      <div>
        <hr className="text-line mb-5" />
        <h3 className="font-bold text-base mb-3">{t.onlineTitle}</h3>
        <p className="text-sm text-textmuted leading-8">
          {t.onlineText}
        </p>
      </div>

      <div>
        <hr className="text-line mb-5" />
        <h3 className="font-bold text-base mb-3">{t.pricingTitle}</h3>
        <p className="text-sm text-textmuted leading-8">
          {t.pricingBefore}
          <Link href={localePath(locale, "/contact")} className="text-darkBrown underline mx-1">{t.pricingLink}</Link>{t.pricingAfter}
        </p>
      </div>
    </aside>
  );
}

export default SideBar;
