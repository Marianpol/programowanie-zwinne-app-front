import Table from "app/components/Table";
import Columns from "app/types/Columns";
import Card from "app/ui/components/Card";
import React from "react";
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
  if (!data?.length) return <EmptyState />;

  return (
    <>
      <div className={s.search}>
        <TableSearch placeholder={placeholder} />
      </div>

      <Card className={s.card}>
        <div className={s.table}>
          <Table data={data} columns={columns} url={url} />
        </div>

        <TablePagination onChangePage={() => {}} data={data} renderedData={data} rowsPerPage={10} />
      </Card>
    </>
  );
};

export default TableWrapper;
