import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import SubNavigation from "../SubNavigation";
import s from "./Navigation.module.css";

export interface ISubNavigation {
  id: string;
  href: string;
  label: string;
}
export interface INavigation {
  id: string;
  label: string;
  href?: string;
  subNavItems?: ISubNavigation[];
}

export const navigation: INavigation[] = [
  { id: "home", href: "/", label: "Strona główna" },
  { id: "projects", href: "/projects", label: "Projekty" },
  { id: "exercises", href: "/exercises", label: "Zadania" },
  { id: "students", href: "/students", label: "Studenci" },
  {
    id: "form",
    label: "Formularz",
    subNavItems: [
      { id: "projectForm", href: "/project/add", label: "Nowy projekt" },
      { id: "exerciseForm", href: "/exercise/add", label: "Nowe zadanie" },
    ],
  },
];

const Navigation = () => {
  const { asPath } = useRouter();
  const [subListActive, setSubListActive] = useState<string | null>(null);

  const getListItemClassName = (href: string | undefined) =>
    clsx(s.listItem, { [s.listItemActive]: href === asPath });

  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        {navigation.map((navProps: INavigation) => {
          const { id, href, label } = navProps;
          const listItemClassName = getListItemClassName(href);

          const handleChangeSubList = () => setSubListActive(subListActive === id ? null : id);

          return (
            <li key={id} className={listItemClassName}>
              {href ? (
                <Link href={href}>{label}</Link>
              ) : (
                <span onClick={handleChangeSubList}>{label}</span>
              )}

              <SubNavigation {...navProps} subListActive={subListActive} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
