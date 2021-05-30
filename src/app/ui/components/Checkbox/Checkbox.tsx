import clsx from "clsx";
import React, { ChangeEvent } from "react";
import s from "./Checkbox.module.css";

export interface CheckboxProps {
  name: string;
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  className?: string;
}

const Checkbox = ({ name, checked, onChange, className, label }: CheckboxProps) => {
  const rootClassName = clsx(className);
  return (
    <div>
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={onChange}
        className={rootClassName}
      />
      {label ? (
        <label htmlFor={name} className={s.label}>
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default Checkbox;
