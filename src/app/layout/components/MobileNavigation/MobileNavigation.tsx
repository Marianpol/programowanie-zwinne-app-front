import ButtonIcon from "app/ui/components/ButtonIcon";
import CloseIcon from "app/ui/icons/CloseIcon";
import NavMenuIcon from "app/ui/icons/NavMenuIcon";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { INavigation, navigation } from "../Navigation";
import s from "./MobileNavigation.module.css";

const MobileNavigation = () => {
  const { asPath } = useRouter();
  const [open, setOpen] = useState(false);

  const getListItemClassName = (href: string | undefined) =>
    clsx(s.listItem, { [s.listItemActive]: href === asPath });

  return (
    <>
      <ButtonIcon
        icon={<NavMenuIcon fill="var(--black-1)" width="32px" />}
        className={s.hamburger}
        onClick={() => setOpen(true)}
      />

      {open ? (
        <nav className={s.nav}>
          <ButtonIcon
            icon={<CloseIcon fill="var(--black-1)" width="20px" />}
            className={s.closeMenu}
            onClick={() => setOpen(false)}
          />

          <ul className={s.list}>
            {navigation.map(({ id, href, label, subNavItems }: INavigation) => {
              const listItemClassName = getListItemClassName(href);
              return (
                <React.Fragment key={id}>
                  {!subNavItems ? (
                    <li className={listItemClassName}>
                      <Link href={href ?? ""}>{label}</Link>
                    </li>
                  ) : (
                    subNavItems.map(({ id, href, label }: INavigation) => {
                      const listItemClassName = getListItemClassName(href);
                      return (
                        <li key={id} className={listItemClassName}>
                          <Link href={href ?? ""}>{label}</Link>
                        </li>
                      );
                    })
                  )}
                </React.Fragment>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </>
  );
};

export default MobileNavigation;
