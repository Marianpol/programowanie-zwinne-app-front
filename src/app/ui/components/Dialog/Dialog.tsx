import Text from "app/ui/components/Text";
import React, { ReactNode } from "react";
import Button from "../Button";
import Card from "../Card";
import s from "./Dialog.module.css";

export interface DialogProps {
  children?: ReactNode;
  description?: string;
  isOpen: boolean;
  onClose: () => void;
  onApprove: () => void;
}

const Dialog = ({ description, isOpen, onApprove, onClose }: DialogProps) => {
  if (!isOpen) return null;

  return (
    <div className={s.backdrop}>
      <Card className={s.root}>
        <div className={s.header}>
          <Text upperCase size="large">
            Uwaga!
          </Text>
        </div>
        <div className={s.content}>
          <Text align="center">{description ?? "-"}</Text>
        </div>
        <div className={s.footer}>
          <Button textColor="white" textSize="small" className={s.button} onClick={onClose}>
            Anuluj
          </Button>
          <Button textColor="white" textSize="small" className={s.button} onClick={onApprove}>
            Zatwierdź
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Dialog;
