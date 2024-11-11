// src/components/ui/Button/Button.tsx
import { forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import type { BaseProps } from "../types";

const button = tv({
  base: [
    "relative font-w95 text-w95-base",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    "focus:outline-none focus:shadow-none",
    'before:content-[""] before:absolute before:inset-0',
    "before:border-2",
    "active:before:border-w95-border-dark active:before:border-t-2",
    "active:before:border-l-2 active:before:border-w95-border-light",
    "active:before:border-b-2 active:before:border-r-2",
  ],
  variants: {
    variant: {
      primary: "bg-w95-primary text-black",
      secondary: "bg-w95-secondary text-white",
      tertiary: "bg-w95-tertiary text-white",
      info: "bg-blue-500 text-white",
      success: "bg-green-500 text-white",
      warning: "bg-yellow-500 text-black",
      danger: "bg-red-500 text-white",
    },
    size: {
      sm: "text-[0.53rem] px-4 py-1 h-[29px]",
      md: "text-[0.6rem] px-6 py-2 h-[37px]",
      lg: "text-[0.75rem] px-8 py-2 h-[46px]",
    },
    bordered: {
      true: "before:border-t-w95-border-light before:border-l-w95-border-light before:border-b-w95-border-dark before:border-r-w95-border-dark",
      false: "",
    },
    borderedLg: {
      true: "before:border-4",
      false: "",
    },
    fullWidth: {
      true: "w-full",
      false: "",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    bordered: false,
    borderedLg: false,
    fullWidth: false,
  },
});

export interface ButtonProps
  extends BaseProps,
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  icon?: string | React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      bordered,
      borderedLg,
      fullWidth,
      icon,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={button({
          variant,
          size,
          bordered,
          borderedLg,
          fullWidth,
          className,
        })}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {icon && <span>{icon}</span>}
          {children}
        </span>
      </button>
    );
  },
);

Button.displayName = "Button";
