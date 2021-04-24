import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import s from "./Navigation.module.css";

export interface Navigation {
  id: string;
  href: string;
  label: string;
}

export const navigation: Navigation[] = [
  { id: "home", href: "/", label: "Strona główna" },
  { id: "projects", href: "/projects", label: "Projekty" },
  { id: "exercises", href: "/exercises", label: "Zadania" },
  { id: "students", href: "/students", label: "Studenci" },
];

const Navigation = () => {
  const { pathname } = useRouter();

  const getListItemClassName = (href: string) =>
    clsx(s.listItem, { [s.listItemActive]: href === pathname });

  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        {navigation.map(({ id, href, label }: Navigation) => {
          const listItemClassName = getListItemClassName(href);
          return (
            <li key={id} className={listItemClassName}>
              <Link href={href}>{label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
