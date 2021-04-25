import CardContent from "app/ui/components/CardContent";
import Text from "app/ui/components/Text";
import React from "react";
import s from "./EmptyState.module.css";

const EmptyState = () => {
  return (
    <CardContent className={s.root}>
      <Text upperCase weight="medium" align="center">
        Brak danych
      </Text>
    </CardContent>
  );
};

export default EmptyState;
