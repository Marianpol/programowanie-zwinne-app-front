import clsx from "clsx";
import React, { ReactNode, CSSProperties } from "react";
import s from "./Card.module.css";

export interface CardProps {
  children?: ReactNode;
  style?: CSSProperties;
  className?: string;
}

const Card = ({ children, className, ...props }: CardProps) => {
  const rootClassName = clsx(s.root, className);
  return (
    <div className={rootClassName} {...props}>
      {children}
    </div>
  );
};

export default Card;
