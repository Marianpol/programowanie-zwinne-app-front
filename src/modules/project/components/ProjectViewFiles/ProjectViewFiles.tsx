import EmptyState from "app/components/EmptyState";
import Avatar from "app/ui/components/Avatar";
import ButtonIcon from "app/ui/components/ButtonIcon";
import Card from "app/ui/components/Card";
import Text from "app/ui/components/Text";
import DownloadIcon from "app/ui/icons/DownloadIcon";
import FileIcon from "app/ui/icons/FileIcon";
import React from "react";
import s from "./ProjectViewFiles.module.css";

export interface ProjectViewProps {
  files: any;
}

const ProjectView = ({ files }: ProjectViewProps) => {
  return (
    <Card className={s.root}>
      <div className={s.content}>
        <Text weight="medium" size="large" className={s.title}>
          Pliki
        </Text>
        <div className={s.files}>
          {files?.length ? (
            files?.map(({ id, name, author }: any) => (
              // createDate
              <div key={id} className={s.file}>
                <div style={{ display: "flex" }}>
                  <Avatar color="secondary">
                    <FileIcon width="22px" fill="#fff" />
                  </Avatar>
                  <div className={s.author}>
                    <Text>{name}</Text>
                    <Text size="small" color="grey">
                      Dodany przez {author.name} 21.03.2021
                    </Text>
                  </div>
                </div>

                <ButtonIcon
                  className={s.button}
                  icon={<DownloadIcon width="20px" fill="#D0D0D0" />}
                />
              </div>
            ))
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProjectView;
