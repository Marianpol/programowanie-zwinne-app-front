import Button from "app/ui/components/Button";
import ExerciseIcon from "app/ui/icons/ExerciseIcon";
import FileIcon from "app/ui/icons/FileIcon";
import UserIcon from "app/ui/icons/UserIcon";
import clsx from "clsx";
import React from "react";
import s from "./ProjectViewTabs.module.css";

export type ProjectViewTabTypes = "exercises" | "users" | "files";

export interface ProjectViewTabsProps {
  tab: ProjectViewTabTypes;
  onChangeTab: (tabName: ProjectViewTabTypes) => void;
}

const ProjectViewTabs = ({ tab, onChangeTab }: ProjectViewTabsProps) => {
  const isTabActive = (tabName: ProjectViewTabTypes) => tab === tabName;
  const getTabClassName = (tabName: ProjectViewTabTypes) =>
    clsx(s.tab, { [s.tabActive]: isTabActive(tabName) });

  return (
    <div className={s.root}>
      <Button
        textSize="small"
        className={getTabClassName("exercises")}
        icon={<ExerciseIcon width="20px" fill={isTabActive("exercises") ? "#00ab55" : "#000"} />}
        onClick={() => onChangeTab("exercises")}
        textColor="inherit"
      >
        Zadania
      </Button>
      <Button
        textSize="small"
        className={getTabClassName("users")}
        icon={<UserIcon width="20px" fill={isTabActive("users") ? "#00ab55" : "#000"} />}
        onClick={() => onChangeTab("users")}
        textColor="inherit"
      >
        Uczestnicy
      </Button>
      <Button
        textSize="small"
        className={getTabClassName("files")}
        icon={<FileIcon width="20px" fill={isTabActive("files") ? "#00ab55" : "#000"} />}
        onClick={() => onChangeTab("files")}
        textColor="inherit"
      >
        Pliki
      </Button>
    </div>
  );
};

export default ProjectViewTabs;
