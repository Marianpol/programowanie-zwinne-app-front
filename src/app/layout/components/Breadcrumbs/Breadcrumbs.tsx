import IBreadcrumbs from "app/layout/types/breadcrumbs";
import Text from "app/ui/components/Text";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import s from "./Breadcrumbs.module.css";

export interface BreadcrumbsProps {
  breadcrumbs: IBreadcrumbs[];
}

const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
  const { asPath } = useRouter();

  const getBreadcrumbActiveClassName = (url: string) =>
    clsx(s.breadcrumb, { [s.breadcrumbActive]: url === asPath });

  return (
    <div className={s.root}>
      {breadcrumbs.map(({ title, url }: IBreadcrumbs, index) => {
        const breadcrumbActiveClassName = getBreadcrumbActiveClassName(url);
        return (
          <Text key={index} className={breadcrumbActiveClassName} size="small" weight="medium">
            <Link href={url}>{title}</Link>
          </Text>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
