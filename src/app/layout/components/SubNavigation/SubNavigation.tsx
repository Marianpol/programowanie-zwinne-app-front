import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { INavigation } from "../Navigation";
import s from "./SubNavigation.module.css";

export interface SubNavigationProps extends INavigation {
  subListActive: string | null;
}

const SubNavigation = ({ id, href, subNavItems, subListActive }: SubNavigationProps) => {
  const { asPath } = useRouter();

  const getSubListItemClassName = (href: string) =>
    clsx(s.subListItem, { [s.subListItemActive]: href === asPath });

  const canRenderSubNav = !href && subNavItems && subListActive === id;

  return canRenderSubNav ? (
    <ul className={s.subList}>
      {subNavItems?.map(({ id, href, label }: any) => (
        <li key={id} className={getSubListItemClassName(href)}>
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  ) : null;
};

export default SubNavigation;
