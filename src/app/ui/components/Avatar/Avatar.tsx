import Text from "app/ui/components/Text";
import clsx from "clsx";
import React, { CSSProperties, ReactNode } from "react";
import s from "./Avatar.module.css";

export type AvatarColor = "primary" | "secondary";

export interface AvatarProps {
  children: ReactNode;
  style?: CSSProperties;
  color?: AvatarColor;
  className?: string;
  onClick?: (...args: any) => void;
  component?: any;
  variant?: "round" | "square";
}

const Avatar = ({
  children,
  color = "primary",
  variant = "square",
  component,
  className,
  ...props
}: AvatarProps) => {
  const rootClassName = clsx(s.root, className, {
    [s.bgPrimary]: color === "primary",
    [s.bgSecondary]: color === "secondary",
    [s.round]: variant === "round",
    [s.square]: variant === "square",
  });
  const AvatarComponent = component ? component : "div";
  return (
    <AvatarComponent className={rootClassName} {...props}>
      <Text upperCase color="white">
        {children}
      </Text>
    </AvatarComponent>
  );
};

export default Avatar;
