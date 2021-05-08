import ButtonIcon from "app/ui/components/ButtonIcon";
import Card from "app/ui/components/Card";
import CardContent from "app/ui/components/CardContent";
import Text from "app/ui/components/Text";
import CalendarIcon from "app/ui/icons/CalendarIcon";
import EditIcon from "app/ui/icons/EditIcon";
import ProjectIcon from "app/ui/icons/ProjectIcon";
import StatusIcon from "app/ui/icons/StatusIcon";
import SubjectIcon from "app/ui/icons/SubjectIcon";
import clsx from "clsx";
import Project from "modules/project/types/Project";
import Router from "next/router";
import React from "react";
import s from "./ProjectViewInfo.module.css";

export interface StudentViewInfoProps {
  project: Project;
}

const ProjectViewInfo = ({ project }: StudentViewInfoProps) => {
  const createDate = new Date().toLocaleDateString();

  const { id, name, subject, status } = project ?? {};
  return (
    <Card className={s.root}>
      <CardContent>
        <div className={s.header}>
          <Text weight="medium" size="large">
            Informacje
          </Text>

          <ButtonIcon
            icon={<EditIcon fill="var(--blue-1)" width="18px" />}
            onClick={() => Router.push(`/project/${id}/edit`)}
          />
        </div>

        <div className={s.wrapper}>
          <ProjectIcon width="20px" />
          <div className={s.textWrapper}>
            <Text upperCase size="small" color="grey">
              Nazwa projektu
            </Text>
            <Text>{name ?? "-"}</Text>
          </div>
        </div>

        <div className={s.wrapper}>
          <SubjectIcon width="20px" />
          <div className={s.textWrapper}>
            <Text upperCase size="small" color="grey">
              Przedmiot
            </Text>
            <Text>{subject ?? "-"}</Text>
          </div>
        </div>

        <div className={s.wrapper}>
          <StatusIcon width="20px" />
          <div className={s.textWrapper}>
            <Text upperCase size="small" color="grey">
              Status
            </Text>
            <Text
              className={clsx({
                [s.statusActive]: status,
                [s.statusInactive]: !status,
              })}
            >
              {status ? "Aktywny" : "Zakończony" ?? "-"}
            </Text>
          </div>
        </div>

        <div className={s.wrapper}>
          <CalendarIcon width="20px" />
          <div className={s.textWrapper}>
            <Text upperCase size="small" color="grey">
              Data utworzenia
            </Text>
            <Text>{createDate ?? "-"}</Text>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectViewInfo;
