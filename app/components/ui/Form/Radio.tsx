import { forwardRef } from "react";
import { tv } from "tailwind-variants";

const radio = tv({
  base: ["relative h-4 w-4", "opacity-0 cursor-pointer"],
});

const radioWrapper = tv({
  base: [
    "relative inline-flex items-start",
    "disabled:opacity-50 disabled:cursor-not-allowed",
  ],
});

const radioControl = tv({
  base: [
    "absolute top-0 left-0",
    "h-4 w-4",
    "border border-[#636363]",
    "bg-white rounded-full",
  ],
});

const radioDot = tv({
  base: ["absolute top-[6px] left-[6px]", "h-2 w-2", "bg-black rounded-full"],
});

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: React.ReactNode;
  className?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, disabled, checked, ...props }, ref) => {
    return (
      <label className={radioWrapper({ className })}>
        <div className="relative mt-1">
          <input
            ref={ref}
            type="radio"
            disabled={disabled}
            checked={checked}
            className={radio()}
            {...props}
          />
          <div className={radioControl()} />
          {checked && <div className={radioDot()} />}
        </div>
        {label && <span className="ml-2 text-w95-base font-w95">{label}</span>}
      </label>
    );
  },
);

Radio.displayName = "Radio";
