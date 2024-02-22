import { Badge, IconButton, Table } from "@radix-ui/themes";
import { format, formatDistance } from "date-fns";
import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { deleteIssue, issueQuery } from "@/utils/client";
import { Issue, Status } from "@prisma/client";

const Row = ({ issue }: { issue: Issue }) => {
  const { deleteIssueMutation, updateIssueMutation } = issueQuery();
  let id = issue.id;
  const handleDelete = () => {
    deleteIssueMutation(id);
  };
  const handleUpdate = () => {
    updateIssueMutation({ ...issue, status: Status.CLOSED });
  };

  return (
    <>
      <Table.Row key={issue.id}>
        <Table.RowHeaderCell>{issue.title}</Table.RowHeaderCell>
        <Table.Cell>{issue.description}</Table.Cell>
        <Table.Cell>
          <Badge color="green">{issue.status}</Badge>
        </Table.Cell>
        <Table.Cell>{format(issue.createdAt, "dd / LL / yyyy")}</Table.Cell>
        <Table.Cell>
          {formatDistance(issue.updatedAt, Date.now(), {
            addSuffix: true,
          })}
        </Table.Cell>
        <Table.Cell>
          <IconButton
            color="blue"
            variant="soft"
            className="mr-2"
            onClick={() => handleUpdate()}
          >
            <MdEdit size="20" />
          </IconButton>
          <IconButton color="red" variant="soft" onClick={() => handleDelete()}>
            <MdDelete size="20" />
          </IconButton>
        </Table.Cell>
      </Table.Row>
    </>
  );
};

export default Row;
