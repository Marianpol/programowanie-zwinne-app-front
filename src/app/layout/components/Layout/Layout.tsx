import React, { ReactNode } from "react";
import PageMenu from "../PageMenu";
import s from "./Layout.module.css";

export interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={s.root}>
      <PageMenu />
      <div className={s.content}>{children}</div>
    </div>
  );
};

export default Layout;
