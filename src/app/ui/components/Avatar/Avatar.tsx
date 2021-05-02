import Text from "app/ui/components/Text";
import clsx from "clsx";
import React, { CSSProperties, ReactNode } from "react";
import s from "./Avatar.module.css";

export type AvatarColor = "primary" | "secondary" | "error";

export interface AvatarProps {
  children: ReactNode;
  style?: CSSProperties;
  color?: AvatarColor;
  className?: string;
  onClick?: (...args: any) => void;
  component?: any;
  variant?: "round" | "square";
  size?: "small" | "normal";
}

const Avatar = ({
  children,
  color = "primary",
  variant = "square",
  size = "normal",
  component,
  className,
  ...props
}: AvatarProps) => {
  const rootClassName = clsx(s.root, className, {
    [s.bgPrimary]: color === "primary",
    [s.bgSecondary]: color === "secondary",
    [s.bgError]: color === "error",
    [s.round]: variant === "round",
    [s.square]: variant === "square",
    [s.sizeNormal]: size === "normal",
    [s.sizeSmall]: size === "small",
  });
  const AvatarComponent = component ? component : "div";

  const textSize = size === "small" ? "small" : "medium";
  return (
    <AvatarComponent className={rootClassName} {...props}>
      <Text upperCase size={textSize} color="white">
        {children}
      </Text>
    </AvatarComponent>
  );
};

export default Avatar;
