import { Utils } from "@/lib/utils";
import React from "react";

const HeroContentHeadline: React.FC<
  React.HtmlHTMLAttributes<HTMLDivElement>
> = ({ className, ...props }) => {
  return (
    <div
      {...props}
      className={Utils.cn(
        "text-white font-extrabold text-[25px] leading-[25px] lg:text-[35px] lg:leading-[35px] tracking-normal",
        className
      )}
    >
      <h1 className="px-[27px] lg:px-0">
        Want to Turn Social Media Into a Profitable Career?
      </h1>
      <h1 className="text-secondary text-shadow-[0px_4px_4px] text-shadow-primary pt-2">
        Discover your way to success with Fametonic:
      </h1>
    </div>
  );
};

export default HeroContentHeadline;
