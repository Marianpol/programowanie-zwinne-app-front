import Table from "app/components/Table";
import TablePagination from "app/components/TablePagination";
import TableSearch from "app/components/TableSearch";
import Page from "app/layout/components/Page";
import Columns from "app/types/Columns";
import Card from "app/ui/components/Card";
import React, { useState } from "react";

const columns: Columns[] = [
  {
    id: "name",
    label: "Nazwa zadania",
    accessor: "name",
    options: { avatarAccessor: "name", width: "25%" },
  },
  {
    id: "description",
    label: "Opis zadania",
    accessor: "description",
    options: { width: "60%" },
  },
  {
    id: "createDate",
    label: "Data utworzenia",
    accessor: "createDate",
    options: { format: "date", width: "15%" },
  },
];

const data = [
  {
    id: "1",
    name: "Przykładowa nazwa zadania",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae distinctio quibusdam architecto necessitatibus molestias soluta et, ad veritatis quam mollitia ea accusamus magni a fugiat dolore rem adipisci dicta labore.",
    createDate: new Date(),
  },
];

const ExercisesPage = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (type: "add" | "remove") => () => {
    if (type === "add") setPage((p) => p + 1);
    if (type === "remove") setPage((p) => p - 1);
  };

  const exercises = data.slice(page * 5, (page + 1) * 5);

  return (
    <Page
      title="Lista projektów"
      breadcrumbs={[
        { title: "Strona główna", url: "/" },
        { title: "Lista projektów", url: "/projects" },
      ]}
    >
      <div style={{ marginBottom: 16 }}>
        <TableSearch placeholder="Szukaj zadania..." />
      </div>

      <Card style={{ display: "flex", flexDirection: "column", height: "90%", overflow: "hidden" }}>
        <div style={{ height: "100%", overflowY: "scroll", margin: "16px 16px 16px 16px" }}>
          <Table data={data} columns={columns} url="/exercise" />
        </div>

        <TablePagination
          onChangePage={handleChangePage}
          data={data}
          renderedData={exercises}
          rowsPerPage={rowsPerPage}
        />
      </Card>
    </Page>
  );
};

export default ExercisesPage;
