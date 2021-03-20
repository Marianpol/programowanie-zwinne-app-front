import IBreadcrumbs from "app/layout/types/breadcrumbs";
import React, { ReactNode } from "react";
import PageHeader from "../PageHeader";
import s from "./Page.module.css";

export interface PageProps {
  title: string;
  breadcrumbs?: IBreadcrumbs[];
  children: ReactNode;
}

const Page = ({ children, title, breadcrumbs }: PageProps) => {
  return (
    <>
      <PageHeader title={title} breadcrumbs={breadcrumbs} />

      <div className={s.pageContent}>{children}</div>
    </>
  );
};

export default Page;
