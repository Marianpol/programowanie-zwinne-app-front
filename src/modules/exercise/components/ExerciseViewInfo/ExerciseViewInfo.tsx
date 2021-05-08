import ButtonIcon from "app/ui/components/ButtonIcon";
import Card from "app/ui/components/Card";
import CardContent from "app/ui/components/CardContent";
import Text from "app/ui/components/Text";
import EditIcon from "app/ui/icons/EditIcon";
import Exercise from "modules/exercise/types/Exercise";
import Router from "next/router";
import React from "react";
import s from "./ExerciseViewInfo.module.css";

export interface ExerciseViewInfoProps {
  exercise: Exercise;
}

const ExerciseViewInfo = ({ exercise }: ExerciseViewInfoProps) => {
  const { id, name, description } = exercise;

  const createDate = new Date().toLocaleDateString();

  return (
    <Card className={s.leftSide}>
      <CardContent>
        <div className={s.header}>
          <div>
            <Text weight="medium" size="large">
              {name}
            </Text>
            <Text weight="medium" size="small" color="grey">
              Data utworzenia: {createDate}
            </Text>
          </div>

          <ButtonIcon
            icon={<EditIcon fill="var(--blue-1)" width="18px" />}
            onClick={() => Router.push(`/exercise/${id}/edit`)}
          />
        </div>

        <Text className={s.description}>{description}</Text>
      </CardContent>
    </Card>
  );
};

export default ExerciseViewInfo;
