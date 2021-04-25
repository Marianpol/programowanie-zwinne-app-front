import clsx from "clsx";
import React, { CSSProperties, ReactNode } from "react";
import s from "./CardContent.module.css";

export interface CardProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const CardContent = ({ children, className, ...props }: CardProps) => {
  const rootClassName = clsx(s.root, className);
  return (
    <div className={rootClassName} {...props}>
      {children}
    </div>
  );
};

export default CardContent;
