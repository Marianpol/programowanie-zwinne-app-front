import ButtonIcon from "app/ui/components/ButtonIcon";
import Card from "app/ui/components/Card";
import CardContent from "app/ui/components/CardContent";
import Dialog from "app/ui/components/Dialog";
import Text from "app/ui/components/Text";
import DeleteIcon from "app/ui/icons/DeleteIcon";
import EditIcon from "app/ui/icons/EditIcon";
import Exercise from "modules/exercise/types/Exercise";
import Router from "next/router";
import React, { useState } from "react";
import s from "./ExerciseViewInfo.module.css";

export interface ExerciseViewInfoProps {
  exercise: Exercise;
}

const deleteExercise = () => {};

const ExerciseViewInfo = ({ exercise }: ExerciseViewInfoProps) => {
  const [open, setOpen] = useState(false);

  const { id, name, description } = exercise;
  const createDate = new Date().toLocaleDateString();

  return (
    <Card>
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

          <div>
            <ButtonIcon
              icon={<DeleteIcon fill="var(--blue-1)" width="18px" />}
              onClick={() => setOpen(true)}
              className={s.deleteButton}
            />

            <Dialog
              description="Czy na pewno chcesz usunąć zadanie?"
              isOpen={open}
              onApprove={deleteExercise}
              onClose={() => setOpen(false)}
            />

            <ButtonIcon
              icon={<EditIcon fill="var(--blue-1)" width="18px" />}
              onClick={() => Router.push(`/exercise/${id}/edit`)}
              className={s.editButton}
            />
          </div>
        </div>

        <Text className={s.description}>{description}</Text>
      </CardContent>
    </Card>
  );
};

export default ExerciseViewInfo;
