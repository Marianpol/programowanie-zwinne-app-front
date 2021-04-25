import TableWrapper from "app/components/TableWrapper";
import StudentViewHeader from "modules/student/components/StudentViewHeader";
import StudentViewInfo from "modules/student/components/StudentViewInfo";
import React, { useState } from "react";
import StudentViewAdditionalInfo from "../StudentViewAdditionalInfo";
import s from "./StudentView.module.css";
import mock from "../../../../../mock.json";
import { projects_columns } from "pages/projects";
import { exercises_columns } from "pages/exercises";

export interface StudentViewProps {
  user: any;
}

const StudentView = ({ user }: StudentViewProps) => {
  const [tab, setTab] = useState("projects");

  const handleChangeTab = (tabName: string) => setTab(tabName);

  const data = tab === "projects" ? mock.projects : mock.exercises;
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
