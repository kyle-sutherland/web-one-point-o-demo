import { forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const formControl = tv({
  base: [
    "w-full px-2 py-1",
    "bg-white text-black",
    "border border-w95-border-darker",
    "text-w95-base font-w95",
    "focus:outline-none focus:ring-0",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    "placeholder:text-gray-500",
  ],
  variants: {
    error: {
      true: "border-red-500",
    },
  },
});

export interface FormControlProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof formControl> {
  className?: string;
  error?: boolean;
}

export const FormControl = forwardRef<HTMLInputElement, FormControlProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={formControl({ error, className })}
        {...props}
      />
    );
  },
);

FormControl.displayName = "FormControl";
