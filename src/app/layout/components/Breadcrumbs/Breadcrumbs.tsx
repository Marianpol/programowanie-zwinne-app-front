import IBreadcrumbs from "app/layout/types/breadcrumbs";
import React from "react";
import Text from "app/ui/components/Text";
import s from "./Breadcrumbs.module.css";
import Link from "next/link";

export interface BreadcrumbsProps {
  breadcrumbs: IBreadcrumbs[];
}

const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
  return (
    <div className={s.root}>
      {breadcrumbs.map(({ title, url }, index) => (
        <Text key={index} className={s.breadcrumb} size="small" weight="medium">
          <Link href={url}>{title}</Link>
        </Text>
      ))}
    </div>
  );
};

export default Breadcrumbs;
