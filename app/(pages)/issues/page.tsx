"use client";
import Error from "@/components/Error";
import IssuesTable from "@/components/IssuesTable";
import Loading from "@/components/Loading";
import { issueQuery } from "@/utils/client";
import { Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { MdAdd } from "react-icons/md";

const page = () => {
  const router = useRouter();
  const goToNewIssue = () => router.push("/issues/new");

  const { issues, issuesIsLoading, issuesError } = issueQuery();
  if (issuesIsLoading) {
    return <Loading />;
  }
  if (issuesError) {
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
