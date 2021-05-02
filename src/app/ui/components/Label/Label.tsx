import Text from "app/ui/components/Text";
import clsx from "clsx";
import React from "react";
import s from "./Label.module.css";

export interface LabelProps {
  status: boolean;
}

const getLabelByStatus = (status: boolean) => {
  if (status) return "Aktywny";

  return "Zakończony";
};

const Label = ({ status }: LabelProps) => {
  const rootClassName = clsx(s.root, { [s.success]: status, [s.error]: !status });
  const label = getLabelByStatus(status);
  return (
    <div className={rootClassName}>
      <Text size="very-small" upperCase weight="medium" color="white" align="center">
        {label}
      </Text>
    </div>
  );
};

export default Label;
