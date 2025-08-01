import React from "react";
import Image from "next/image";

const HeroImage: React.FC<React.HtmlHTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div {...props} className={className}>
      <Image
        src={"/images/hero-image.png"}
        alt="Hero Image"
        width={390}
        height={426}
        className="-translate-y-3 lg:w-[666px] lg:[h-679px]"
      />
    </div>
  );
};

export default HeroImage;
