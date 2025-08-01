import { Utils } from "@/lib/utils";
import React from "react";

const Loading: React.FC<React.HtmlHTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div className={Utils.cn("text-white", className)} {...props}>
      Loading...
    </div>
  );
};

export default Loading;
