import firstLetters from "app/libs/firstLetters";
import Button from "app/ui/components/Button";
import ButtonIcon from "app/ui/components/ButtonIcon";
import Card from "app/ui/components/Card";
import Dialog from "app/ui/components/Dialog";
import Text from "app/ui/components/Text";
import DeleteIcon from "app/ui/icons/DeleteIcon";
import EditIcon from "app/ui/icons/EditIcon";
import ExerciseIcon from "app/ui/icons/ExerciseIcon";
import ProjectIcon from "app/ui/icons/ProjectIcon";
import clsx from "clsx";
import Router from "next/router";
import React, { useState } from "react";
import s from "./StudentViewHeader.module.css";

export interface StudentViewHeaderProps {
  user: any;
  tab: any;
  onChangeTab: (tabName: string) => void;
}

const deleteUser = () => {};

const StudentViewHeader = ({ user, tab, onChangeTab }: StudentViewHeaderProps) => {
  const [open, setOpen] = useState(false);

  const { id, name, type } = user ?? {};

  const getTabClassName = (tabName: string) => clsx(s.tab, { [s.tabActive]: tabName === tab });
  const getTextColor = (tabName: string) => (tabName === tab ? "inherit" : "grey");

  return (
    <Card className={s.root}>
      <div className={s.background}></div>

      <ButtonIcon
        icon={<DeleteIcon fill="var(--white-1)" width="18px" />}
        onClick={() => setOpen(true)}
        className={s.deleteButton}
      />

      <Dialog
        description="Czy na pewno chcesz usunąć studenta?"
        isOpen={open}
        onApprove={deleteUser}
        onClose={() => setOpen(false)}
      />

      <ButtonIcon
        icon={<EditIcon fill="var(--white-1)" width="18px" />}
        onClick={() => Router.push(`/exercise/${id}/edit`)}
        className={s.editButton}
      />

      <div className={s.avatar}>
        <Text color="white" weight="medium" size="very-large">
          {firstLetters(name ?? "") ?? "-"}
        </Text>
      </div>

      <div className={s.name}>
        <Text color="white" weight="medium" size="very-large">
          {name ?? "-"}
        </Text>
        <Text color="light-grey" size="medium">
          {/* {type ?? "-"} */}
          Student
        </Text>
      </div>

      <div className={s.tabs}>
        <Button
          className={getTabClassName("projects")}
          onClick={() => onChangeTab("projects")}
          icon={<ProjectIcon width="15px" fill={"projects" === tab ? "#00ab55" : "#9b9b9b"} />}
          textSize="very-small"
          textColor={getTextColor("projects")}
        >
          Projekty
        </Button>
        <Button
          className={getTabClassName("exercises")}
          onClick={() => onChangeTab("exercises")}
          icon={<ExerciseIcon width="15px" fill={"exercises" === tab ? "#00ab55" : "#9b9b9b"} />}
          textSize="very-small"
          textColor={getTextColor("exercises")}
        >
          Zadania
        </Button>
      </div>
    </Card>
  );
};

export default StudentViewHeader;
