import IBreadcrumbs from "app/layout/types/breadcrumbs";
import Text from "app/ui/components/Text";
import React from "react";
import Breadcrumbs from "../Breadcrumbs";
import s from "./PageSubheader.module.css";

export interface PageSubheaderProps {
  title: string;
  breadcrumbs?: IBreadcrumbs[];
}

const PageSubheader = ({ title, breadcrumbs = [] }: PageSubheaderProps) => {
  return (
    <div className={s.root}>
      <div className={s.wrapper}>
        <Text size="large" weight="semi-bold" upperCase>
          {title}
        </Text>
        <Breadcrumbs breadcrumbs={breadcrumbs} />
      </div>
    </div>
  );
};

export default PageSubheader;
