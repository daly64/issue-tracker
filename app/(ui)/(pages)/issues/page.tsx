"use client";
import { issueQuery } from "@utils/client/reactQuery";
import { Button } from "primereact/button";
import Loading from "@components/Loading";
import Error from "@components/Error";
import IssuesTable from "@components/IssuesTable";
import navigationSystem from "@utils/client/navigationSystem";

const page = () => {
  const { goToNewIssuePage } = navigationSystem();
  const { issues, issuesIsLoading, issuesError } = issueQuery();
  if (issuesIsLoading) {
    return <Loading />;
  }
  if (issuesError) {
    return <Error />;
  }

  return (
    <div className="issues-page">
      <Button text raised onClick={goToNewIssuePage}>
        <i className="pi pi-plus" />
        New Issue
      </Button>

      <IssuesTable issues={issues} />
    </div>
  );
};

export default page;
