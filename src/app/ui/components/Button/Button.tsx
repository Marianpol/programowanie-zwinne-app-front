import Text from "app/ui/components/Text";
import clsx from "clsx";
import React, { ReactNode } from "react";
import s from "./Button.module.css";

export interface ButtonProps {
  children?: ReactNode;
  onClick?: (event: any) => void;
  className?: string;
  textSize?: TextSize;
  textAlign?: TextAlign;
  textColor?: TextColor;
  textWeight?: TextWeight;
  icon?: ReactNode;
  type?: "button" | "submit";
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
  type = "button",
}: ButtonProps) => {
  const rootClassName = clsx(s.root, className);
  return (
    <button className={rootClassName} onClick={onClick} type={type}>
      <div style={{ marginRight: 8 }}>{icon}</div>
      {children ? (
        <Text upperCase size={textSize} color={textColor} align={textAlign} weight={textWeight}>
          {children}
        </Text>
      ) : null}
    </button>
  );
};

export default Button;
