import clsx from "clsx";
import React, { ReactNode } from "react";
import s from "./Button.module.css";
import Text from "app/ui/components/Text";

export interface ButtonProps {
  children: ReactNode;
  onClick?: (event: any) => void;
  className?: string;
  textSize?: "very-small" | "small" | "medium" | "large";
}

const Button = ({ children, onClick, textSize = "medium", className }: ButtonProps) => {
  const rootClassName = clsx(s.root, className);
  return (
    <button className={rootClassName} onClick={onClick}>
      <Text upperCase size={textSize} align="center">
        {children}
      </Text>
    </button>
  );
};

export default Button;
