"use client";
import Error from "@/components/Error";
import IssuesTable from "@/components/IssuesTable";
import Loading from "@/components/Loading";
import { issueQuery } from "@/utils/client";
import { useRouter } from "next/navigation";
import { Button } from "primereact/button";
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
    <div className="issues-page">
      <Button outlined
       onClick={goToNewIssue}>
        <i className="pi pi-plus" />
        New Issue
      </Button>

      <IssuesTable issues={issues} />
    </div>
  );
};

export default page;
