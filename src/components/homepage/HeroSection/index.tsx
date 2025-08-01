import React from "react";
import HeroImage from "./HeroImage";
import HeroContent from "./HeroContent";
import { Utils } from "@/lib/utils";

const HeroSection: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={Utils.cn(
        "text-white text-center lg:text-left lg:flex lg:items-center relative lg:py-14",
        className
      )}
      {...props}
    >
      <HeroImage className="w-full -translate-y-1 lg:hidden" />
      <HeroContent className="w-full lg:w-6/12 z-10" />
      <div></div>
      <div className="hidden absolute -top-10 -right-[140px] bottom-0 w-[666px] lg:flex items-center justify-center">
        <HeroImage className="w-full h-full max-h-[679px]" />
      </div>
    </div>
  );
};

export default HeroSection;
