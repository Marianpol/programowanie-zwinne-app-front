import TableWrapper from "app/components/TableWrapper";
import Card from "app/ui/components/Card";
import CardContent from "app/ui/components/CardContent";
import Text from "app/ui/components/Text";
import { projects_columns } from "pages/projects";
import React from "react";
import mock from "../../../../../mock.json";
import s from "./ExerciseView.module.css";

export interface ExerciseViewProps {
  exercise: any;
}

const ExerciseView = ({ exercise }: ExerciseViewProps) => {
  const { name, description } = exercise;

  const createDate = new Date().toLocaleDateString();

  const data = mock.projects;
  const columns = projects_columns;
  const url = "/project";
  const placeholder = "Szukaj projektu...";

  return (
    <div className={s.root}>
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

      <div className={s.rightSide}>
        <TableWrapper data={data} columns={columns} url={url} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default ExerciseView;
