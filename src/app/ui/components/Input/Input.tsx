import clsx from "clsx";
import React from "react";
import s from "./Input.module.css";

export interface InputProps {
  name: string;
  value?: any;
  onChange?: (event: any) => void;
  onBlur?: (event: any) => void;
  type?: "text" | "number";
  placeholder?: string;
  className?: string;
  error?: boolean;
  label?: string;
  fullWidth?: boolean;
  required?: boolean;
}

const Input = ({
  type = "text",
  name,
  className,
  error,
  label,
  fullWidth,
  required,
  ...props
}: InputProps) => {
  const rootClassName = clsx(s.root, { [s.fullWidth]: fullWidth });
  const inputClassName = clsx(s.input, className, { [s.error]: error, [s.fullWidth]: fullWidth });
  const req = required ? "*" : "";
  return (
    <div className={rootClassName}>
      <input {...props} name={name} id={name} type={type} className={inputClassName} />
      {label ? (
        <label htmlFor={name} className={s.label}>
          {`${label}${req}`}
        </label>
      ) : null}
    </div>
  );
};

export default Input;
