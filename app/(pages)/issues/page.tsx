"use client";
import Error from "@/components/Error";
import IssuesTable from "@/components/IssuesTable";
import Loading from "@/components/Loading";
import { getAllIssues } from "@/utils/client";
import { Issue } from "@prisma/client";
import { Button } from "@radix-ui/themes";

import { useRouter } from "next/navigation";
import { MdAdd } from "react-icons/md";
import { useQuery } from "react-query";

const page = () => {
  const { data, isLoading, error } = useQuery("issues", getAllIssues);
  const router = useRouter();
  const issues = data?.data as Issue[];
  const goToNewIssue = () => router.push("/issues/new");
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <>
      {/* <Link href="/issues/new">New issue</Link> */}
      <Button onClick={goToNewIssue}>
        <MdAdd size="20" />
        New Issue
      </Button>

      <IssuesTable issues={issues} />
    </>
  );
};

export default page;
