import clsx from "clsx";
import React, { CSSProperties, ReactNode } from "react";
import s from "./Text.module.css";

export interface TextProps {
  children: ReactNode;
  className?: string;
  size?: TextSize;
  weight?: TextWeight;
  color?: TextColor;
  align?: TextAlign;
  upperCase?: boolean;
  style?: CSSProperties;
}

const Text = ({
  children,
  size = "medium",
  weight = "regular",
  color = "primary",
  align = "left",
  className,
  upperCase,
  style,
}: TextProps) => {
  const rootClassName = clsx(className, {
    [s.verySmallSize]: size === "very-small",
    [s.smallSize]: size === "small",
    [s.mediumSize]: size === "medium",
    [s.largeSize]: size === "large",
    [s.veryLargeSize]: size === "very-large",
    [s.regularWeight]: weight === "regular",
    [s.mediumWeight]: weight === "medium",
    [s.semiBoldWeight]: weight === "semi-bold",
    [s.boldWeight]: weight === "bold",
    [s.primaryColor]: color === "primary",
    [s.whiteColor]: color === "white",
    [s.greyColor]: color === "grey",
    [s.lightGreyColor]: color === "light-grey",
    [s.errorColor]: color === "error",
    [s.inheritColor]: color === "inherit",
    [s.leftTextAlign]: align === "left",
    [s.rightTextAlign]: align === "right",
    [s.centerTextAlign]: align === "center",
    [s.upperCase]: upperCase,
  });
  return (
    <div className={rootClassName} style={style}>
      {children}
    </div>
  );
};

export default Text;
