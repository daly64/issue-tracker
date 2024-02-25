"use client";
import { handlers } from "@utils/client/handlers";
import navigationSystem from "@utils/client/navigationSystem";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import React from "react";
import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Params } from "@types";
import { getIssueById } from "@utils/client/axiosCRUD";
const editIssuePage = ({ params }: Params) => {
  const { id } = params;

  const { goToIssuePage } = navigationSystem();
  const { newIssue, handleSubmit, handleTitleChange, handleDescriptionChange } =
    handlers();
  return (
    <div className="new-issue-page">
      <h1>Edit Issue</h1>
      <InputText
        className="input"
        keyfilter="alphanum"
        placeholder="title"
        onChange={(event) => handleTitleChange(event)}
      />

      <SimpleMdeReact
        className="input"
        placeholder="description"
        value={newIssue.description}
        onChange={(value) => handleDescriptionChange(value)}
      />

      <Button
        onClick={() => {
          handleSubmit();
          goToIssuePage();
        }}
      >
        Save
      </Button>
    </div>
  );
};

export default editIssuePage;
