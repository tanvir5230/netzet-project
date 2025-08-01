import { Utils } from "@/lib/utils";
import React from "react";

const Banner: React.FC<React.HtmlHTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      className={Utils.cn("banner-gradient px-5 py-4", className)}
    >
      <p className="text-white text-center text-base font-extrabold leading-5 font-figtree">
        <span>🚀 </span>
        <span className="text-secondary">FRESH BEGINNINGS SALE:</span>{" "}
        <span>Extra 25% OFF, Limited Spots - start your journey today!</span>
      </p>
    </div>
  );
};

export default Banner;
