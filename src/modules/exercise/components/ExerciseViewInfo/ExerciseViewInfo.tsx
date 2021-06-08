import ButtonIcon from "app/ui/components/ButtonIcon";
import Card from "app/ui/components/Card";
import CardContent from "app/ui/components/CardContent";
import Dialog from "app/ui/components/Dialog";
import Text from "app/ui/components/Text";
import DeleteIcon from "app/ui/icons/DeleteIcon";
import EditIcon from "app/ui/icons/EditIcon";
import axios from "axios";
import Exercise from "modules/exercise/types/Exercise";
import Router from "next/router";
import React, { useState } from "react";
import { toast } from "react-toastify";
import s from "./ExerciseViewInfo.module.css";

export interface ExerciseViewInfoProps {
  exercise: Exercise | undefined;
}

const deleteExercise = (id: string | undefined) => () => {
  return axios
    .delete(process.env.SERVER_URL + ':' + process.env.PORT +`/api/exercise/${id}`)
    .then(() => {
      Router.push("/exercises");
      toast.success("Usunięto zadanie");
    })
    .catch((error) => toast.error(error.message));
};

const ExerciseViewInfo = ({ exercise }: ExerciseViewInfoProps) => {
  const [open, setOpen] = useState(false);

  const { id, name, description, createDate } = exercise ?? {};

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
              onApprove={deleteExercise(id)}
              onClose={() => setOpen(false)}
            />

            <ButtonIcon
              icon={<EditIcon fill="var(--blue-1)" width="18px" />}
              onClick={() => Router.push(`/exercise/${id}/edit`)}
              className={s.editButton}
            />
          </div>
        </div>

        <Text>{description}</Text>
      </CardContent>
    </Card>
  );
};

export default ExerciseViewInfo;
