import Text from "app/ui/components/Text";
import React from "react";
import s from "./ErrorTag.module.css";

const ErrorTag = () => {
  return (
    <div className={s.root}>
      <Text size="very-small" color="error">
        To pole jest wymagane
      </Text>
    </div>
  );
};

export default ErrorTag;
