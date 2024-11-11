import React from "react";

export interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  error?: string;
  required?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const FormGroup: React.FC<FormGroupProps> = ({
  className,
  label,
  error,
  required,
  children,
  ...props
}) => {
  return (
    <div className={className} {...props}>
      {label && (
        <label className="block mb-1 text-w95-base font-w95">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      {children}
      {error && (
        <span className="block mt-1 text-red-500 text-w95-sm font-w95">
          {error}
        </span>
      )}
    </div>
  );
};

FormGroup.displayName = "FormGroup";
