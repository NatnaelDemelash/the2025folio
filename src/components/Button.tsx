import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Button = (
  props: {
    variant: "primary" | "secondary" | "text";
    iconAfter?: React.ReactNode;
  } & ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { children, className, variant, iconAfter, ...rest } = props;

  return (
    <button
      className={twMerge(
        "h-10 px-6 rounded-xl uppercase inline-flex items-center gap-2 text-sm sm:h-12 sm:px-8",
        variant == "primary" && "bg-stone-800 hover:bg-stone-900 text-white",
        variant == "secondary" && "border border-orange-500 lowercase",
        variant == "text" && "h-auto px-0 ",
        className
      )}
      {...rest}
    >
      <span>{children}</span>
      {iconAfter && <span className="ml-1">{iconAfter}</span>}
    </button>
  );
};

export default Button;
