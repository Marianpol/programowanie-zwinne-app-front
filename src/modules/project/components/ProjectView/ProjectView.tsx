import TableWrapper from "app/components/TableWrapper";
import Project from "modules/project/types/Project";
import { exercises_columns } from "pages/exercises";
import { students_columns } from "pages/students";
import React, { useState } from "react";
import mock from "../../../../../mock.json";
import ProjectViewFiles from "../ProjectViewFiles";
import ProjectViewInfo from "../ProjectViewInfo";
import ProjectViewTabs, { ProjectViewTabTypes } from "../ProjectViewTabs";
import s from "./ProjectView.module.css";

export interface ProjectViewProps {
  project: Project;
}

const dataExercises = mock.exercises;
const columnsExercises = exercises_columns;

const dataStudents = mock.students;
const columnsStudents = students_columns;

const ProjectView = ({ project }: ProjectViewProps) => {
  const [tab, setTab] = useState<ProjectViewTabTypes>("exercises");

  const handleChangeTab = (tabName: ProjectViewTabTypes) => setTab(tabName);

  return (
    <div className={s.root}>
      <div className={s.leftSide}>
        <ProjectViewInfo project={project} />

        <ProjectViewTabs tab={tab} onChangeTab={handleChangeTab} />
      </div>

      <div className={s.rightSide}>
        {tab === "exercises" ? (
          <TableWrapper
            data={dataExercises}
            columns={columnsExercises}
            url="/exercise"
            placeholder="Szukaj zadania..."
          />
        ) : null}

        {tab === "users" ? (
          <TableWrapper
            data={dataStudents}
            columns={columnsStudents}
            url="/student"
            placeholder="Szukaj studenta..."
          />
        ) : null}
        {tab === "files" ? <ProjectViewFiles files={project.files} /> : null}
      </div>
    </div>
  );
};

export default ProjectView;
