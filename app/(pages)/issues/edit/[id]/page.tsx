"use client";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React, { useEffect, useState } from "react";
import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

import Loading from "@/components/Loading";
import Error from "@/components/Error";
import { Dropdown } from "primereact/dropdown";
import { Issue, Status } from "@prisma/client";
import { any } from "valibot";
import { issueQuery } from "@/utils/client/reactQuery/issueQuery";
import { Params } from "@/utils/api/interfaces/Params";
import issueNavigationSystem from "@/utils/client/navigationSystem/issueNavigationSystem";
import { issueHandlers } from "@/utils/client/handlers/issueHandlers";

const editIssuePage = ({ params }: Params) => {
  const { singleIssue } = issueQuery();
  const { goToIssuePage } = issueNavigationSystem();
  const { handleUpdate } = issueHandlers();
  const { id } = params;
  const { Issue, singleIssueIsLoading, singleIssueError } = singleIssue(
    Number(id)
  );

  const statuses = [
    { name: "Open", status: Status.OPEN },
    { name: "in Progress", status: Status.IN_PROGRESS },
    { name: "Closed", status: Status.CLOSED },
  ];
  const [vstatus, setVstatus] = useState(null);
  const [status, setStatus] = useState<Status>(Status.OPEN);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    setTitle(Issue?.title);
    setDescription(Issue?.description);
    setStatus(Issue?.status);
  }, [Issue]);

  if (singleIssueIsLoading) return <Loading />;

  if (singleIssueError) return <Error />;

  return (
    <div className="edit-issue-page">
      <h1>Edit Issue</h1>
      <div className="row">
        <InputText
          className="input"
          keyfilter="alphanum"
          placeholder="title"
          value={title || ""}
          onChange={(event) => setTitle(event.target.value)}
        />

        <Dropdown
          value={vstatus}
          onChange={(e) => {
            setVstatus(e.value);
            setStatus(e.value.status);
          }}
          options={statuses}
          optionLabel="name"
          placeholder={Issue.status}
        />
      </div>

      <SimpleMdeReact
        className="input"
        placeholder="description"
        value={description || ""}
        onChange={(value) => setDescription(value)}
      />

      <Button
        onClick={() => {
          handleUpdate(title, description, status, Issue);
          goToIssuePage();
        }}
      >
        Save
      </Button>
    </div>
  );
};

export default editIssuePage;
