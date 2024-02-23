import { Issue } from "@prisma/client";

import React from "react";
import Row from "./Row";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const IssuesTable = ({ issues }: { issues: Issue[] }) => {
  return (
    <>
      IssuesTable
      <DataTable value={issues} size="small" tableStyle={{ minWidth: "50rem" }}>
        <Column field="id" header="id"></Column>
        <Column body={(row) => row.title} header="title"></Column>
        <Column field="status" header="status"></Column>
        {/* <Column field="createdAt" header="createdAt"></Column> */}
        {/* <Column field="updatedAt" header="updatedAt"></Column> */}
        <Column  header="action"></Column>
      </DataTable>
      {/* <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Created At</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Last update</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Row key={issue.id} issue={issue} />
          ))}
        </Table.Body>
      </Table.Root> */}
    </>
  );
};

export default IssuesTable;
