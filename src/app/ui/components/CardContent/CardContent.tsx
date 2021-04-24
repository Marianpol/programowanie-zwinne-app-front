import React, { CSSProperties, ReactNode } from "react";
import s from "./CardContent.module.css";

export interface CardProps {
  children?: ReactNode;
  style?: CSSProperties;
}

const CardContent = ({ children, ...props }: CardProps) => {
  return (
    <div className={s.root} {...props}>
      {children}
    </div>
  );
};

export default CardContent;
