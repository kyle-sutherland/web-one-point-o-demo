interface SectionProps {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Section({
  children,
  variant = "default",
  size = "md",
  className = "",
}: SectionProps) {
  const variantClasses = {
    default: "bg-white",
    secondary: "bg-w95-secondary",
    tertiary: "bg-w95-tertiary",
  };

  const sizeClasses = {
    sm: "py-8",
    md: "py-12",
    lg: "py-16",
  };

  return (
    <section
      className={`
      ${variantClasses[variant]}
      ${sizeClasses[size]}
      ${className}
    `}
    >
      {children}
    </section>
  );
}
