import ButtonIcon from "app/ui/components/ButtonIcon";
import ArrowIcon from "app/ui/icons/ArrowIcon";
import React from "react";
import s from "./TablePagination.module.css";
import Text from "app/ui/components/Text";
import CardContent from "app/ui/components/CardContent";

const TablePagination = ({ onChangePage, renderedData, data, rowsPerPage }: any) => {
  return (
    <CardContent className={s.root}>
      <div className={s.amountOfElements}>
        <Text>Wierszy na stronę: {rowsPerPage}</Text>
      </div>

      <div className={s.amountOfElements}>
        <Text>
          1-{rowsPerPage} z {data.length}
        </Text>
      </div>

      <div className={s.arrows}>
        <ButtonIcon
          className={s.arrow}
          icon={<ArrowIcon width="12px" fill="black" />}
          onClick={onChangePage("remove")}
        />

        <ButtonIcon icon={<ArrowIcon width="12px" fill="black" />} onClick={onChangePage("add")} />
      </div>
    </CardContent>
  );
};

export default TablePagination;
