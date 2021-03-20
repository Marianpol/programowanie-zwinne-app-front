import IBreadcrumbs from "app/layout/types/breadcrumbs";
import React from "react";
import Breadcrumbs from "../Breadcrumbs";
import s from "./PageHeader.module.css";
import Text from "app/ui/components/Text";

export interface PageHeaderProps {
  title: string;
  breadcrumbs?: IBreadcrumbs[];
}

const PageHeader = ({ title, breadcrumbs = [] }: PageHeaderProps) => {
  return (
    <div className={s.root}>
      <Text size="large" weight="semi-bold" upperCase>
        {title}
      </Text>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
    </div>
  );
};

export default PageHeader;
