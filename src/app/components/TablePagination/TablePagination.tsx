import ButtonIcon from "app/ui/components/ButtonIcon";
import ArrowIcon from "app/ui/icons/ArrowIcon";
import React from "react";
import s from "./TablePagination.module.css";
import Text from "app/ui/components/Text";
import CardContent from "app/ui/components/CardContent";

const rowsPerPageOptions = [10, 25, 50, 100];

const TablePagination = ({
  rowsPerPage,
  page,
  onChangePage,
  onChangeRowsPerPage,
  data,
  renderedData,
}: any) => {
  const handleChangeRowsPerPage = (event: any) => {
    onChangeRowsPerPage(event.target.value);
    onChangePage(0);
  };

  return (
    <CardContent className={s.root}>
      <div className={s.amountOfElements}>
        <Text>
          Wierszy na stronę:{" "}
          <select className={s.select} onChange={handleChangeRowsPerPage}>
            {rowsPerPageOptions.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </Text>
      </div>

      <div className={s.amountOfElements}>
        <Text>
          {rowsPerPage * page + 1}-{rowsPerPage * page + renderedData.length} z {data.length}
        </Text>
      </div>

      <div className={s.arrows}>
        <ButtonIcon
          className={s.arrow}
          icon={<ArrowIcon width="12px" fill={page === 0 ? "#d0d0d0" : "#000"} />}
          onClick={() => onChangePage(page - 1)}
          disabled={page === 0}
        />

        <ButtonIcon
          icon={
            <ArrowIcon
              width="12px"
              fill={rowsPerPage * page + renderedData.length === data.length ? "#d0d0d0" : "#000"}
            />
          }
          onClick={() => onChangePage(page + 1)}
          disabled={rowsPerPage * page + renderedData.length === data.length}
        />
      </div>
    </CardContent>
  );
};

export default TablePagination;
