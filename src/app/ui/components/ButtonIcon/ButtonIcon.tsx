import clsx from "clsx";
import React, { ReactNode } from "react";
import s from "./ButtonIcon.module.css";

export interface ButtonIconProps {
  icon: ReactNode;
  onClick?: (event: any) => void;
  className?: string;
}

const ButtonIcon = ({ icon, onClick, className }: ButtonIconProps) => {
  const rootClassName = clsx(s.root, className);
  return (
    <button className={rootClassName} onClick={onClick}>
      {icon}
    </button>
  );
};

export default ButtonIcon;
