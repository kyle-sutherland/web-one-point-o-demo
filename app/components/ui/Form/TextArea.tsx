import { forwardRef } from "react";
import { tv } from "tailwind-variants";
import type { BaseProps } from "../types";

const textarea = tv({
  base: [
    "w-full px-2 py-1",
    "bg-white text-black",
    "border border-w95-border-darker",
    "text-w95-base font-w95",
    "focus:outline-none focus:ring-0",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    "placeholder:text-gray-500",
    "resize-none",
  ],
  variants: {
    error: {
      true: "border-red-500",
    },
    resize: {
      none: "resize-none",
      both: "resize",
      horizontal: "resize-x",
      vertical: "resize-y",
    },
  },
  defaultVariants: {
    resize: "none",
  },
});

export interface TextAreaProps
  extends BaseProps,
    React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  resize?: "none" | "both" | "horizontal" | "vertical";
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, error, resize, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={textarea({ error, resize, className })}
        {...props}
      />
    );
  },
);

TextArea.displayName = "TextArea";
