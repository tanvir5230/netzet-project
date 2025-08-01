import { Utils } from "@/lib/utils";
import React from "react";

const HeroContentDisclaimer: React.FC<
  React.HtmlHTMLAttributes<HTMLDivElement>
> = ({ className, ...props }) => {
  return (
    <div
      className={Utils.cn(
        "text-muted font-figtree font-[500] text-xs leading-3 px-[27px] lg:px-0",
        className
      )}
      {...props}
    >
      <p>
        By clicking &quot;Get Started&quot;, you agree with Terms and
        Conditions, Privacy Policy, Subscription Terms
      </p>
    </div>
  );
};

export default HeroContentDisclaimer;
