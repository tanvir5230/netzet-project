import { Utils } from "@/lib/utils";
import React from "react";
import HeroContentHeadline from "./Headline";
import HeroContentFeatureList from "./FeatureList";
import Copyright from "@/components/Copyright";
import HeroContentDisclaimer from "./Disclaimer";
import CTAButton from "./CTAButton";
import CTAText from "./CTAText";

const HeroContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={Utils.cn("flex flex-col gap-[22px] pb-8", className)}
      {...props}
    >
      <HeroContentHeadline />
      <HeroContentFeatureList />
      <div className="flex flex-col gap-[19px]">
        <HeroContentDisclaimer />
        <Copyright />
      </div>
      <div className="flex flex-col items-center gap-[10px]">
        <CTAButton />
        <CTAText />
      </div>
    </div>
  );
};

export default HeroContent;
