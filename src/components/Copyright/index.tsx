import { Utils } from "@/lib/utils";
import React from "react";

const Copyright: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <p
      className={Utils.cn(
        "font-nunito font-[500] text-[10px] text-muted",
        className
      )}
      {...props}
    >
      Fametonic 2025 &copy;All Rights Reserved.
    </p>
  );
};

export default Copyright;
