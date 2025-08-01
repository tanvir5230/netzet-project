import { Utils } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const AppHeader: React.FC<React.HtmlHTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <header
      {...props}
      className={Utils.cn(
        "flex justify-between items-center py-4 min-h-14",
        className
      )}
    >
      <div></div>
      <Image src={"/images/logo/logo.svg"} alt="logo" width={120} height={80} />
      <Image src={"/images/icons/menu.svg"} alt="menu" width={20} height={12} />
    </header>
  );
};

export default AppHeader;
