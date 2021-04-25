import firstLetters from "app/libs/firstLetters";
import Avatar from "app/ui/components/Avatar";
import Card from "app/ui/components/Card";
import CardContent from "app/ui/components/CardContent";
import CardHeader from "app/ui/components/CardHeader";
import CardLabel from "app/ui/components/CardLabel";
import Text from "app/ui/components/Text";
import React from "react";
import s from "./ExerciseView.module.css";

export interface ExerciseViewProps {
  exercise: any;
}

const ExerciseView = ({ exercise }: ExerciseViewProps) => {
  const { name, description } = exercise ?? {};
  const createDate = new Date().toLocaleDateString();

  return (
    <div className={s.root}>
      <Card className={s.leftSide}>
        <CardHeader>
          <Avatar style={{ marginRight: 16 }} color="secondary">
            {firstLetters(name ?? "-")}
          </Avatar>
          <CardLabel title={name ?? "-"} subtitle={`Data utworzenia: ${createDate}`} />
        </CardHeader>
        <CardContent>
          <Text>{description ?? "-"}</Text>
        </CardContent>
      </Card>

      <div className={s.rightSide}>
        <Card className={s.participants}>
          <CardHeader>
            <CardLabel title="Uczestnicy" />
          </CardHeader>
          <CardContent></CardContent>
        </Card>

        <Card className={s.files}>
          <CardHeader>
            <CardLabel title="Lista plików" />
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExerciseView;
