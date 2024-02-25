import { Issue, Status } from "@prisma/client";

import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { format, formatDistance } from "date-fns";
import { Button } from "primereact/button";
import handlers from "@utils/client/handlers";

const IssuesTable = ({ issues }: { issues: Issue[] }) => {
  const{handleUpdate,handleDelete}=handlers()
  return (
    <>
      <DataTable value={issues} size="small" tableStyle={{ minWidth: "1rem" }}>
        <Column field="title" header="title" />
        <Column field="status" header="status" />
        <Column
          body={(row) => format(row.createdAt, "dd / LL / yyyy")}
          header="createdAt"
        />
        <Column
          body={(row) => formatDistance(row.updatedAt, Date.now())}
          header="updatedAt"
        />
        <Column
          header="action"
          body={(row) => (
            <>
              <Button
                text
                icon="pi pi-pencil"
                onClick={() =>handleUpdate(row)}
              />
              <Button
                text
                severity="danger"
                icon="pi pi-trash"
                onClick={() => handleDelete(row)}
              />
            </>
          )}
        />
      </DataTable>
    </>
  );
};

export default IssuesTable;
