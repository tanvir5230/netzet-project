import React from "react";
import { Utils } from "@/lib/utils";

const CTAText: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <p
      className={Utils.cn("font-figtree text-xs leading-none", className)}
      {...props}
    >
      1-minute quiz for personalized Insights
    </p>
  );
};

export default CTAText;
