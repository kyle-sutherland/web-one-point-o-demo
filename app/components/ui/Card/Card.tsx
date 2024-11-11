import { forwardRef } from "react";
import { tv, type VariantProps } from "tailwind-variants";

// Define base variant types
type CardVariant = "primary" | "secondary" | "tertiary";

const card = tv({
  base: [
    "bg-w95-primary",
    "border-2",
    "border-t-w95-border-light border-l-w95-border-light",
    "border-b-w95-border-dark border-r-w95-border-dark",
  ],
  variants: {
    variant: {
      primary: "",
      secondary: "",
      tertiary: "",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const cardHeader = tv({
  base: [
    "px-2 py-1 font-w95 text-w95-base",
    "border-b-2 border-w95-border-dark",
  ],
  variants: {
    variant: {
      primary: "bg-w95-primary text-black",
      secondary: "bg-w95-secondary text-white",
      tertiary: "bg-w95-tertiary text-white",
    },
  },
});

type CardBaseProps = Omit<React.HTMLAttributes<HTMLDivElement>, "title">;

export interface CardProps extends CardBaseProps, VariantProps<typeof card> {
  title?: React.ReactNode;
  icon?: string | React.ReactNode;
  footer?: React.ReactNode;
  variant?: CardVariant;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, title, icon, footer, children, ...props }, ref) => {
    return (
      <div ref={ref} className={card({ variant, className })} {...props}>
        {title && (
          <div className={cardHeader({ variant })}>
            <div className="flex items-center gap-2">
              {icon && <span>{icon}</span>}
              {typeof title === "string" ? <span>{title}</span> : title}
            </div>
          </div>
        )}
        <div className="p-4">{children}</div>
        {footer && (
          <div className="px-4 py-3 border-t-2 border-w95-border-dark">
            {footer}
          </div>
        )}
      </div>
    );
  },
);

Card.displayName = "Card";
