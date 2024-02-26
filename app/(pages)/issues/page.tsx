"use client";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import issueNavigationSystem from "@/utils/client/navigationSystem/issueNavigationSystem";
import { issueQuery } from "@/utils/client/reactQuery/issueQuery";
import { Button } from "primereact/button";
import IssuesTable from "@/components/IssuesTable";

const page = () => {
  const { goToNewIssuePage } = issueNavigationSystem();
  const { issues, issuesIsLoading, issuesError } = issueQuery();
  if (issuesIsLoading) {
    return <Loading />;
  }
  if (issuesError) {
    return <Error />;
  }

  return (
    <div className="issues-page">
      <Button text onClick={goToNewIssuePage}>
        <i className="pi pi-plus" />
        <p>New Issue</p> 
      </Button>

      <IssuesTable issues={issues} />
    </div>
  );
};

export default page;
