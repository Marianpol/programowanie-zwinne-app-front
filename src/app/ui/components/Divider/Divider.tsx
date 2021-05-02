import Text from "app/ui/components/Text";
import clsx from "clsx";
import React from "react";
import s from "./Divider.module.css";

export interface DividerProps {
  noMargin?: boolean;
}

const Divider = ({ noMargin }: DividerProps) => {
  const rootClassName = clsx(s.root, { [s.noMargin]: noMargin });

  return <hr className={rootClassName}></hr>;
};

export default Divider;
