"use client";
import { getAllIssues } from "@/utils/client";
import { Issue } from "@prisma/client";
import { Badge, Button, Table, TableCell } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { useQuery } from "react-query";

import { format, formatDistance } from "date-fns";
import { MdDeleteForever } from "react-icons/md";

const page = () => {
  const { data, isLoading, error } = useQuery("issues", getAllIssues);

  const issues = data?.data as Issue[];
  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <>
      <Button>
        <Link href="/issues/new">New issue</Link>
      </Button>

      <Table.Root>
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
            <Table.Row key={issue.id}>
              <Table.RowHeaderCell>{issue.title}</Table.RowHeaderCell>
              <Table.Cell>{issue.description}</Table.Cell>
              <Table.Cell>
                <Badge color="green">{issue.status}</Badge>
              </Table.Cell>
              <Table.Cell>
                {format(issue.createdAt, "dd/LL/yyyy - hh:mm")}
              </Table.Cell>
              <Table.Cell>
                {formatDistance(issue.updatedAt, Date.now(), {
                  addSuffix: true,
                })}
              </Table.Cell>
              <Table.Cell>
                <Button color="red" variant="soft">
                  <MdDeleteForever size="20" />
                  delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </>
  );
};

export default page;
