import clsx from "clsx";
import React, { ReactNode } from "react";
import s from "./Text.module.css";

export interface TextProps {
  children: ReactNode;
  className?: string;
  size?: "small" | "medium" | "large";
  weight?: "regular" | "medium" | "semi-bold" | "bold";
  color?: "primary";
  upperCase?: boolean;
}

const Text = ({
  children,
  size = "medium",
  weight = "regular",
  color = "primary",
  className,
  upperCase,
}: TextProps) => {
  const rootClassName = clsx(s.root, className, {
    [s.smallSize]: size === "small",
    [s.mediumSize]: size === "medium",
    [s.largeSize]: size === "large",
    [s.regularWeight]: weight === "regular",
    [s.mediumWeight]: weight === "medium",
    [s.semiBoldWeight]: weight === "semi-bold",
    [s.boldWeight]: weight === "bold",
    [s.primaryColor]: color === "primary",
    [s.upperCase]: upperCase,
  });
  return <div className={rootClassName}>{children}</div>;
};

export default Text;
