import clsx from "clsx";
import React, { ReactNode } from "react";
import s from "./Form.module.css";

export interface FormProps {
  onSubmit: (event: any) => void;
  children: ReactNode;
  className?: string;
}

const Form = ({ children, onSubmit, className }: FormProps) => {
  const rootClassName = clsx(s.root, className);

  const handleSubmit = (event: any) => {
    onSubmit && onSubmit(event);
  };

  return (
    <form onSubmit={handleSubmit} className={rootClassName}>
      {children}
    </form>
  );
};

export default Form;
