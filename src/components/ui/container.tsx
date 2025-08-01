import { Utils } from "@/lib/utils";
import React from "react";

const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={Utils.cn("px-5 max-w-[1024px] mx-auto", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
