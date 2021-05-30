import TableWrapper from "app/components/TableWrapper";
import Exercise from "modules/exercise/types/Exercise";
import { projects_columns } from "pages/projects";
import React from "react";
import ExerciseViewInfo from "../ExerciseViewInfo";
import s from "./ExerciseView.module.css";

export interface ExerciseViewProps {
  exercise: Exercise | undefined;
}

const ExerciseView = ({ exercise }: ExerciseViewProps) => {
  return (
    <div className={s.root}>
      <div className={s.leftSide}>
        <ExerciseViewInfo exercise={exercise} />
      </div>

      <div className={s.rightSide}>
        <TableWrapper
          data={[]}
          columns={projects_columns}
          url="/project"
          placeholder="Szukaj projektu..."
        />
      </div>
    </div>
  );
};

export default ExerciseView;
