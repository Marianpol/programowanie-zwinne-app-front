import TableWrapper from "app/components/TableWrapper";
import StudentViewHeader from "modules/student/components/StudentViewHeader";
import StudentViewInfo from "modules/student/components/StudentViewInfo";
import Student from "modules/student/types/Student";
import { exercises_columns } from "pages/exercises";
import { formatProjectsData, projects_columns } from "pages/projects";
import React, { useState } from "react";
import mock from "../../../../../mock.json";
import StudentViewAdditionalInfo from "../StudentViewAdditionalInfo";
import s from "./StudentView.module.css";

export interface StudentViewProps {
  user: Student;
}

const StudentView = ({ user }: StudentViewProps) => {
  const [tab, setTab] = useState("projects");

  const handleChangeTab = (tabName: string) => setTab(tabName);

  const data = tab === "projects" ? formatProjectsData(mock.projects) : mock.exercises;
  const columns = tab === "projects" ? projects_columns : exercises_columns;
  const url = tab === "projects" ? "/project" : "/exercise";
  const placeholder = tab === "projects" ? "Szukaj projektu..." : "Szukaj zadania...";

  return (
    <div className={s.root}>
      <div className={s.leftSide}>
        <StudentViewHeader user={user} tab={tab} onChangeTab={handleChangeTab} />

        <StudentViewInfo user={user} />

        <StudentViewAdditionalInfo />
      </div>

      <div className={s.rightSide}>
        <TableWrapper data={data} columns={columns} url={url} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default StudentView;
