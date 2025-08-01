import React from "react";
import Button from "@/components/ui/button";
import { Utils } from "@/lib/utils";
import Image from "next/image";

type CTAButtonProps = React.ComponentProps<typeof Button>;

const CTAButton: React.FC<CTAButtonProps> = ({ className, ...props }) => {
  return (
    <Button
      className={Utils.cn(
        "bg-primary w-full rounded-[10px] flex gap-[10px] py-3",
        className
      )}
      {...props}
    >
      <span className="uppercase text-white font-bold text-xl leading-none">
        Get Started
      </span>
      <Image
        src={"/images/icons/right-arrow.svg"}
        alt="Right Arrow"
        width={11}
        height={6}
      />
    </Button>
  );
};

export default CTAButton;
