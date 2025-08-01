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
        className={className}
      />
    </div>
  );
};

export default HeroImage;
