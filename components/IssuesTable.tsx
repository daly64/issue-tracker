import { Issue } from "@prisma/client";

import React from "react";
import Row from "./Row";

const IssuesTable = ({ issues }: { issues: Issue[] }) => {
  return (
    <>
      IssuesTable
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
