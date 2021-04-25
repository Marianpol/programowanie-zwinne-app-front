import Card from "app/ui/components/Card";
import Text from "app/ui/components/Text";
import React from "react";
import s from "./StudentViewAdditionalInfo.module.css";

export interface StudentViewAdditionalInfoProps {}

const StudentViewAdditionalInfo = ({}: StudentViewAdditionalInfoProps) => {
  return (
    <Card className={s.root}>
      <div className={s.wrapper}>
        <Text size="very-large" weight="semi-bold">
          127
        </Text>
        <Text color="grey" upperCase size="small">
          Projekty
        </Text>
      </div>

      <div className={s.wrapper}>
        <Text size="very-large" weight="semi-bold">
          51
        </Text>
        <Text color="grey" upperCase size="small">
          Zadania
        </Text>
      </div>
    </Card>
  );
};

export default StudentViewAdditionalInfo;
