import IBreadcrumbs from "app/layout/types/breadcrumbs";
import React, { ReactNode } from "react";
import PageHeader from "../PageHeader";
import PageSubheader from "../PageSubheader";
import s from "./Page.module.css";

export interface PageProps {
  title: string;
  breadcrumbs?: IBreadcrumbs[];
  children: ReactNode;
}

const Page = ({ children, title, breadcrumbs }: PageProps) => {
  return (
    <>
      <PageHeader />

      <PageSubheader title={title} breadcrumbs={breadcrumbs} />

      <div className={s.root}>{children}</div>
    </>
  );
};

export default Page;
