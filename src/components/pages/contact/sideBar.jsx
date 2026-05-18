import Link from "next/link";
import React from "react";

function SideBar() {
  return (
    <aside className="md:w-1/5 w-full font-jakarta text-black bg-side flex flex-col gap-6 side px-10 py-14">
      <div>
        <div className="w-6 h-0.5 bg-cardbg mb-4" />
        <h3 className="font-bold text-base mb-3">تماس مستقیم</h3>
        <p className="text-sm text-textmuted leading-8 mb-4">
          از طریق واتساپ یا تلگرام می‌توانید مستقیم پیام بدید.
        </p>
        <div className="flex flex-col gap-2">
          <Link href="https://wa.me/" className="underline text-sm text-darkBrown">
            واتساپ
          </Link>
          <Link href="https://t.me/" className="underline text-sm text-darkBrown">
            تلگرام
          </Link>
        </div>
        <hr className="text-line mt-5" />
      </div>

      <div>
        <h3 className="font-bold text-base mb-3">اولین قدم</h3>
        <p className="text-sm text-textmuted leading-8 mb-4">
          یک گفت‌وگوی کوتاه برای آشنایی و بررسی اینکه این فضا برای شما مناسبه. بدون تعهد، بدون فشار.
        </p>
        <hr className="text-line" />
      </div>

      <div>
        <h3 className="font-bold text-base mb-3">ساعات پاسخگویی</h3>
        <p className="text-sm text-textmuted leading-8">
          شنبه تا چهارشنبه<br />
          ۱۰ صبح تا ۷ عصر<br />
          <span className="text-xs opacity-70">(به وقت تهران)</span>
        </p>
      </div>

      <div>
        <hr className="text-line mb-5" />
        <h3 className="font-bold text-base mb-3">جلسات آنلاین</h3>
        <p className="text-sm text-textmuted leading-8">
          جلسات به‌صورت آنلاین برگزار می‌شوند و برای تمام ساکنان ایران در دسترس است.
        </p>
      </div>
    </aside>
  );
}

export default SideBar;
