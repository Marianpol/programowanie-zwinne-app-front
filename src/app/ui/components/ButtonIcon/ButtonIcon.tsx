import clsx from "clsx";
import React, { ReactNode } from "react";
import s from "./ButtonIcon.module.css";

export interface ButtonIconProps {
  icon: ReactNode;
  onClick?: (event: any) => void;
  className?: string;
  disabled?: boolean;
}

const ButtonIcon = ({ icon, onClick, className, disabled }: ButtonIconProps) => {
  const rootClassName = clsx(s.root, className);
  return (
    <button disabled={disabled} className={rootClassName} onClick={onClick}>
      {icon}
    </button>
  );
};

export default ButtonIcon;
