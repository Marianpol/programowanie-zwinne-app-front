import clsx from "clsx";
import React, { ChangeEvent, ReactNode } from "react";
import s from "./Form.module.css";

export interface FormProps {
  onSubmit: (event: ChangeEvent<HTMLFormElement>) => void;
  children: ReactNode;
  className?: string;
}

const Form = ({ children, onSubmit, className }: FormProps) => {
  const rootClassName = clsx(s.root, className);

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    onSubmit && onSubmit(event);
  };

  return (
    <form onSubmit={handleSubmit} className={rootClassName}>
      {children}
    </form>
  );
};

export default Form;
