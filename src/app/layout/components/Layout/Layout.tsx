import clsx from "clsx";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import s from "./Layout.module.css";

export interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useRouter();
  const contentClassName = clsx(s.content, {
    [s.contentWithoutGrid]: ["/login", "/register"].includes(pathname),
  });
  return (
    <div className={s.root}>
      <div className={contentClassName}>{children}</div>
    </div>
  );
};

export default Layout;
