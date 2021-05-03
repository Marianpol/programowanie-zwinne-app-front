import Card from "app/ui/components/Card";
import CardContent from "app/ui/components/CardContent";
import Text from "app/ui/components/Text";
import React from "react";
import s from "./ExerciseViewInfo.module.css";

const ExerciseViewInfo = ({ name, description }: any) => {
  const createDate = new Date().toLocaleDateString();

  return (
    <Card className={s.leftSide}>
      <CardContent>
        <Text weight="medium" size="large">
          {name}
        </Text>
        <Text weight="medium" size="small" color="grey" className={s.title}>
          Data utworzenia: {createDate}
        </Text>
        <Text className={s.title}>{description}</Text>
      </CardContent>
    </Card>
  );
};

export default ExerciseViewInfo;
