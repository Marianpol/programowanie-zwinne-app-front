import clsx from "clsx";
import React, { ReactNode } from "react";
import s from "./Button.module.css";
import Text from "app/ui/components/Text";

export interface ButtonProps {
  children: ReactNode;
  onClick?: (event: any) => void;
  className?: string;
  textSize?: TextSize;
  textAlign?: TextAlign;
  textColor?: TextColor;
  textWeight?: TextWeight;
  icon?: ReactNode;
}

const Button = ({
  children,
  onClick,
  textSize = "medium",
  textColor = "primary",
  textAlign = "center",
  textWeight = "regular",
  icon,
  className,
}: ButtonProps) => {
  const rootClassName = clsx(s.root, className);
  return (
    <button className={rootClassName} onClick={onClick}>
      <div style={{ marginRight: 8 }}>{icon}</div>
      <Text upperCase size={textSize} color={textColor} align={textAlign} weight={textWeight}>
        {children}
      </Text>
    </button>
  );
};

export default Button;
