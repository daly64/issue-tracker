"use client";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import issueNavigationSystem from "@/utils/client/navigationSystem/issueNavigationSystem";
import { issueHandlers } from "@/utils/client/handlers/issueHandlers";

const newIssuePage = () => {
  const { goToIssuePage } = issueNavigationSystem();
  const { newIssue, handleSubmit, handleTitleChange, handleDescriptionChange } =
    issueHandlers();
  return (
    <div className="new-issue-page">
      <h1>New Issue</h1>
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
        Submit New Issue
      </Button>
    </div>
  );
};
export default newIssuePage;
