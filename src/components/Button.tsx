import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  variant: "primary" | "secondary" | "text";
  iconAfter?: React.ReactNode;
} & (
  | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: never })
  | (AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
);

const Button = (props: ButtonProps) => {
  const { children, className, variant, iconAfter, href, ...rest } = props;

  const baseClasses = twMerge(
    "h-10 px-6 rounded-xl uppercase inline-flex items-center gap-2 sm:h-12 sm:px-8",
    variant === "primary" && "bg-stone-800 hover:bg-stone-900 text-white",
    variant === "secondary" && "border border-orange-500 lowercase",
    variant === "text" && "h-auto px-0",
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={baseClasses}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        <span>{children}</span>
        {iconAfter && <span className="ml-1">{iconAfter}</span>}
      </Link>
    );
  }

  return (
    <button
      className={baseClasses}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      <span>{children}</span>
      {iconAfter && <span className="ml-1">{iconAfter}</span>}
    </button>
  );
};

export default Button;
