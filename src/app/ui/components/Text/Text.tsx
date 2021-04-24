import clsx from "clsx";
import React, { ReactNode } from "react";
import s from "./Text.module.css";

export interface TextProps {
  children: ReactNode;
  className?: string;
  size?: "very-small" | "small" | "medium" | "large";
  weight?: "regular" | "medium" | "semi-bold" | "bold";
  color?: "primary" | "white";
  align?: "left" | "center" | "right";
  upperCase?: boolean;
}

const Text = ({
  children,
  size = "medium",
  weight = "regular",
  color = "primary",
  align = "left",
  className,
  upperCase,
}: TextProps) => {
  const rootClassName = clsx(s.root, className, {
    [s.verySmallSize]: size === "very-small",
    [s.smallSize]: size === "small",
    [s.mediumSize]: size === "medium",
    [s.largeSize]: size === "large",
    [s.regularWeight]: weight === "regular",
    [s.mediumWeight]: weight === "medium",
    [s.semiBoldWeight]: weight === "semi-bold",
    [s.boldWeight]: weight === "bold",
    [s.primaryColor]: color === "primary",
    [s.whiteColor]: color === "white",
    [s.leftTextAlign]: align === "left",
    [s.rightTextAlign]: align === "right",
    [s.centerTextAlign]: align === "center",
    [s.upperCase]: upperCase,
  });
  return <div className={rootClassName}>{children}</div>;
};

export default Text;
