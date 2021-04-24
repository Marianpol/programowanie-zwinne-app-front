import clsx from "clsx";
import React from "react";
import s from "./Label.module.css";
import Text from "app/ui/components/Text";

export interface LabelProps {
  status: boolean;
}

const getLabelTitle = (status: boolean) => {
  if (status) return "Aktywny";

  return "Zakończony";
};

const Label = ({ status }: LabelProps) => {
  const rootClassName = clsx(s.root, { [s.success]: status, [s.error]: !status });
  return (
    <div className={rootClassName}>
      <Text size="very-small" upperCase weight="medium" color="white" align="center">
        {getLabelTitle(status)}
      </Text>
    </div>
  );
};

export default Label;
