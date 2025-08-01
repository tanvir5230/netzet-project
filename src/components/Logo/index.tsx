import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LogoProps {
  width: number;
  height: number;
  isMobile?: boolean;
}

const Logo: React.FC<LogoProps & React.ComponentProps<"a">> = ({
  width,
  height,
  isMobile,
  ...props
}) => {
  return (
    <Link href="/" prefetch={true} {...props}>
      <Image
        src="/images/logo/logo.svg"
        alt="Company Logo"
        width={width}
        height={height}
        priority={isMobile}
        sizes={isMobile ? "105px" : "173px"}
        className="object-contain"
      />
    </Link>
  );
};

export default Logo;
