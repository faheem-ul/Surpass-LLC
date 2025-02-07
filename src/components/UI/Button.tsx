import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const button = cva(
  [
    "px-6",
    "py-4",
    "rounded-[4px]",
    "font-bold",
    "text-[20px]",
    "leading-[36px]",
    "font-montserrat",
  ],
  {
    variants: {
      variant: {
        primary: ["bg-primary text-white font-semibold text-[16px] font-Segoe"],
      },
      size: {
        small: ["py-4", "px-6"],
        medium: [""],
      },
    },
    compoundVariants: [{ variant: "primary", size: "medium" }],
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  isLoading,
  children,
  ...props
}) => (
  <button
    disabled={isLoading}
    className={cn(
      button({ variant, size, className }),
      "flex items-center justify-center"
    )}
    {...props}
  >
    {children}
  </button>
);

export default Button;
