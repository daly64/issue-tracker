"use client";
import { getAllIssues } from "@/utils/client";
import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { useQuery } from "react-query";

const page = () => {
  const { data, isLoading, error } = useQuery("issues", getAllIssues);

  const issues = data?.data;
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
      {JSON.stringify(issues)}
    </>
  );
};

export default page;
