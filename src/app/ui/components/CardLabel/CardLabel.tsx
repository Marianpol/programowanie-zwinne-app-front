import Text from "app/ui/components/Text";
import clsx from "clsx";
import React, { CSSProperties } from "react";
import s from "./CardLabel.module.css";

export interface CardLabelProps {
  title: string;
  subtitle?: string;
  className?: string;
  style?: CSSProperties;
  titleProps?: {
    variant: TextSize;
    color: TextColor;
  };
  subtitleProps?: {
    variant: TextSize;
    color: TextColor;
  };
}

const CardLabel = ({
  title,
  subtitle,
  className,
  titleProps,
  subtitleProps,
  ...props
}: CardLabelProps) => {
  const rootClassName = clsx(s.root, className);
  const titlePropsObject = {
    size: titleProps?.variant,
    color: titleProps?.color,
  };
  const subtitlePropsObject = {
    size: subtitleProps?.variant ?? "small",
    color: subtitleProps?.color ?? "grey",
  };
  return (
    <div className={rootClassName} {...props}>
      <Text {...titlePropsObject}>{title}</Text>
      <Text {...subtitlePropsObject}>{subtitle}</Text>
    </div>
  );
};

export default CardLabel;
