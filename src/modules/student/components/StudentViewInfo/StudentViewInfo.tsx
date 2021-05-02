import Card from "app/ui/components/Card";
import CardContent from "app/ui/components/CardContent";
import Text from "app/ui/components/Text";
import BookIcon from "app/ui/icons/BookIcon";
import EmailIcon from "app/ui/icons/EmailIcon";
import LocationIcon from "app/ui/icons/LocationIcon";
import UserIcon from "app/ui/icons/UserIcon";
import React from "react";
import s from "./StudentViewInfo.module.css";

export interface StudentViewInfoProps {
  user: any;
}

const StudentViewInfo = ({ user }: StudentViewInfoProps) => {
  const { name, indexNumber, email, fullTimeStudies } = user ?? {};
  return (
    <Card className={s.root}>
      <CardContent>
        <Text weight="medium" size="large" className={s.title}>
          Informacje
        </Text>

        <div className={s.wrapper}>
          <UserIcon width="20px" />
          <div className={s.textWrapper}>
            <Text upperCase size="small" color="grey">
              Imię i nazwisko
            </Text>
            <Text>{name ?? "-"}</Text>
          </div>
        </div>

        <div className={s.wrapper}>
          <BookIcon width="20px" />
          <div className={s.textWrapper}>
            <Text upperCase size="small" color="grey">
              Numer indeksu
            </Text>
            <Text>{indexNumber ?? "-"}</Text>
          </div>
        </div>

        <div className={s.wrapper}>
          <EmailIcon width="20px" />
          <div className={s.textWrapper}>
            <Text upperCase size="small" color="grey">
              Adres e-mail
            </Text>
            <Text>{email ?? "-"}</Text>
          </div>
        </div>

        <div className={s.wrapper}>
          <LocationIcon width="20px" />
          <div className={s.textWrapper}>
            <Text upperCase size="small" color="grey">
              Studia stacjonarne
            </Text>
            <Text>{fullTimeStudies ?? "-"}</Text>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentViewInfo;
