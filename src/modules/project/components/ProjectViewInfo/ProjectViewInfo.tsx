import Card from "app/ui/components/Card";
import CardContent from "app/ui/components/CardContent";
import Text from "app/ui/components/Text";
import CalendarIcon from "app/ui/icons/CalendarIcon";
import ProjectIcon from "app/ui/icons/ProjectIcon";
import StatusIcon from "app/ui/icons/StatusIcon";
import SubjectIcon from "app/ui/icons/SubjectIcon";
import clsx from "clsx";
import React from "react";
import s from "./ProjectViewInfo.module.css";

export interface StudentViewInfoProps {
  project: any;
}

const ProjectViewInfo = ({ project }: StudentViewInfoProps) => {
  const createDate = new Date().toLocaleDateString();

  const { name, subject, status } = project ?? {};
  return (
    <Card className={s.root}>
      <CardContent>
        <Text weight="medium" size="large" className={s.title}>
          Informacje
        </Text>

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
