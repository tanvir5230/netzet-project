import * as React from "react";
import { Utils } from "@/lib/utils";

const Button: React.FC<React.ComponentProps<"button">> = ({
  className,
  disabled,
  ...props
}) => {
  return (
    <button
      data-slot="button"
      disabled={disabled}
      className={Utils.cn(
        "inline-flex items-center justify-center",
        disabled ? "opacity-50 cursor-not-allowed" : "",
        className
      )}
      {...props}
    />
  );
};

export default Button;
