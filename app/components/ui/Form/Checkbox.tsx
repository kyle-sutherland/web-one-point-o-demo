import { forwardRef } from "react";
import { tv } from "tailwind-variants";

const checkbox = tv({
  base: ["relative h-4 w-4", "opacity-0 cursor-pointer"],
});

const checkboxWrapper = tv({
  base: [
    "relative inline-flex items-start",
    "disabled:opacity-50 disabled:cursor-not-allowed",
  ],
});

const checkboxControl = tv({
  base: [
    "absolute top-0 left-0",
    "h-4 w-4",
    "border border-[#636363]",
    "bg-white",
  ],
});

const checkboxX = tv({
  base: [
    "absolute top-0 left-0",
    "h-4 w-4",
    'before:content-[""] before:absolute',
    "before:bg-black before:w-[1px] before:h-[17px]",
    "before:left-[49%] before:top-[-1px]",
    "before:rotate-[135deg]",
    'after:content-[""] after:absolute',
    "after:bg-black after:w-[1px] after:h-[17px]",
    "after:left-[49%] after:top-[-1px]",
    "after:rotate-[-135deg]",
  ],
});

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: React.ReactNode;
  className?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, disabled, checked, ...props }, ref) => {
    return (
      <label className={checkboxWrapper({ className })}>
        <div className="relative mt-1">
          <input
            ref={ref}
            type="checkbox"
            disabled={disabled}
            checked={checked}
            className={checkbox()}
            {...props}
          />
          <div className={checkboxControl()} />
          {checked && <div className={checkboxX()} />}
        </div>
        {label && <span className="ml-2 text-w95-base font-w95">{label}</span>}
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";
