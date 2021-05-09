import TableWrapper from "app/components/TableWrapper";
import Exercise from "modules/exercise/types/Exercise";
import { formatProjectsData, projects_columns } from "pages/projects";
import React from "react";
import mock from "../../../../../mock.json";
import ExerciseViewInfo from "../ExerciseViewInfo";
import s from "./ExerciseView.module.css";

export interface ExerciseViewProps {
  exercise: Exercise;
}

const ExerciseView = ({ exercise }: ExerciseViewProps) => {
  const data = formatProjectsData(mock.projects);
  const columns = projects_columns;
  const url = "/project";
  const placeholder = "Szukaj projektu...";

  return (
    <div className={s.root}>
      <div className={s.leftSide}>
        <ExerciseViewInfo exercise={exercise} />
      </div>

      <div className={s.rightSide}>
        <TableWrapper data={data} columns={columns} url={url} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default ExerciseView;
