import Link from "next/link";
import React from "react";
import s from "./PageMenu.module.css";

const PageMenu = () => {
  return (
    <div className={s.root}>
      <ul>
        <li>
          <Link href="/">Strona główna</Link>
        </li>
        <li>
          <Link href="/chat">Komunikator</Link>
        </li>
        <li>
          <Link href="/projects">Lista projektów</Link>
        </li>
      </ul>
    </div>
  );
};

export default PageMenu;
