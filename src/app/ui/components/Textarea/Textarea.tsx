import clsx from "clsx";
import React from "react";
import s from "./Textarea.module.css";

export interface TextareaProps {
  name: string;
  value: any;
  onChange: (event: any) => void;
  onBlur: (event: any) => void;
  className?: string;
  placeholder?: string;
  error?: boolean;
  label?: string;
  multiline?: boolean;
  rows?: number;
  col?: number;
  fullWidth?: boolean;
  required?: boolean;
}

const Textarea = ({
  name,
  label,
  className,
  error,
  fullWidth,
  required,
  multiline = false,
  ...props
}: TextareaProps) => {
  const rootClassName = clsx(s.root, { [s.fullWidth]: fullWidth });
  const textareaClassName = clsx(s.textarea, className, {
    [s.error]: error,
    [s.fullWidth]: fullWidth,
  });
  const req = required ? "*" : "";
  return (
    <div className={rootClassName}>
      <textarea
        {...props}
        name={name}
        multiline={multiline.toString()}
        className={textareaClassName}
      />
      {label ? (
        <label htmlFor={name} className={s.label}>
          {`${label}${req}`}
        </label>
      ) : null}
    </div>
  );
};

export default Textarea;
