"use client";
import Error from "@/components/Error";
import IssuesTable from "@/components/IssuesTable";
import Loading from "@/components/Loading";
import Row from "@/components/Row";
import { getAllIssues } from "@/utils/client";
import { Issue } from "@prisma/client";
import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { MdAdd } from "react-icons/md";
import { useQuery } from "react-query";

const page = () => {
  const { data, isLoading, error } = useQuery("issues", getAllIssues);

  const issues = data?.data as Issue[];
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <>
      <Button>
        <MdAdd size="20" />
        New Issue
      </Button>
      {/* <Link href="/issues/new">New issue</Link> */}

      <IssuesTable issues={issues} />
    </>
  );
};

export default page;
