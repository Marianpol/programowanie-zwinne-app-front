import clsx from "clsx";
import React, { ReactNode } from "react";
import s from "./Select.module.css";

export interface SelectProps {
  name: string;
  value?: any;
  onChange?: (event: any) => void;
  onBlur?: (event: any) => void;
  placeholder?: string;
  className?: string;
  error?: boolean;
  multiple?: boolean;
  children: ReactNode;
  label?: string;
  fullWidth?: boolean;
  required?: boolean;
}

const Select = ({
  name,
  label,
  className,
  error,
  children,
  multiple,
  fullWidth,
  required,
  ...props
}: SelectProps) => {
  const rootClassName = clsx(s.root, { [s.fullWidth]: fullWidth });
  const selectClassName = clsx(s.select, className, {
    [s.error]: error,
    [s.arrow]: !multiple,
    [s.multiple]: multiple,
    [s.fullWidth]: fullWidth,
  });
  const req = required ? "*" : "";
  return (
    <div className={rootClassName}>
      <select {...props} name={name} multiple={multiple} className={selectClassName}>
        {children}
      </select>
      {label ? (
        <label htmlFor={name} className={s.label}>
          {`${label}${req}`}
        </label>
      ) : null}
    </div>
  );
};

export default Select;
