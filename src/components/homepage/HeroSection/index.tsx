import React from "react";
import HeroImage from "./HeroImage";
import HeroContent from "./HeroContent";
import { Utils } from "@/lib/utils";

const HeroSection: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div className={Utils.cn("text-white", className)} {...props}>
      <HeroImage />
      <HeroContent />
    </div>
  );
};

export default HeroSection;
