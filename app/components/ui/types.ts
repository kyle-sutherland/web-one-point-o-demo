export type Color =
  | "primary" // #c0c0c0
  | "secondary" // #008081
  | "tertiary" // #000181
  | "info" // #1E90FF
  | "success" // #00bf9a
  | "warning" // #f5b759
  | "danger"; // #FA5252

export type Size = "sm" | "md" | "lg";

export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
  variant?: Color;
  size?: Size;
}
