import Table from "app/components/Table";
import Columns from "app/types/Columns";
import Card from "app/ui/components/Card";
import React, { useEffect, useState } from "react";
import EmptyState from "../EmptyState";
import TablePagination from "../TablePagination";
import TableSearch from "../TableSearch";
import s from "./TableWrapper.module.css";

export interface TableWrapperProps {
  data: any;
  columns: Columns[];
  url: string;
  placeholder?: string;
}

const TableWrapper = ({ data, columns, url, placeholder }: TableWrapperProps) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [value, setValue] = useState(data.slice(0, rowsPerPage));

  useEffect(() => {
    setValue(data.slice(rowsPerPage * page, rowsPerPage * (page + 1)));
  }, [data, page, rowsPerPage]);

  const handleSearch = (event: any) => {
    const inputValue = event.target.value.toLowerCase();
    setValue(data?.filter(({ name }: any) => name.toLowerCase().includes(inputValue)));
    setPage(0);
    setRowsPerPage(10);
  };

  return (
    <>
      <div className={s.search}>
        <TableSearch placeholder={placeholder} onChange={handleSearch} />
      </div>

      <Card className={s.card}>
        {value.length ? (
          <div className={s.table}>
            <Table data={value} columns={columns} url={url} />
          </div>
        ) : (
          <EmptyState />
        )}
        <TablePagination
          onChangePage={setPage}
          onChangeRowsPerPage={setRowsPerPage}
          renderedData={value}
          data={data}
          page={page}
          rowsPerPage={rowsPerPage}
        />
      </Card>
    </>
  );
};

export default TableWrapper;
