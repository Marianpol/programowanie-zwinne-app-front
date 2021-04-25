import Text from "app/ui/components/Text";
import clsx from "clsx";
import React, { CSSProperties, ReactNode } from "react";
import s from "./CardHeader.module.css";

export interface CardHeaderProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const CardHeader = ({ children, className, ...props }: CardHeaderProps) => {
  const rootClassName = clsx(s.root, className);
  return (
    <div className={rootClassName} {...props}>
      {children}
    </div>
  );
};

export default CardHeader;
