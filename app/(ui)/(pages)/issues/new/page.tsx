"use client";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import handlers from "@utils/client/handlers";
import { useRouter } from "next/navigation";

const newIssuePage = () => {
  const router = useRouter();
  const goToIssue = () => router.push("/issues");

  let { handleDescriptionChange, handleTitleChange, handleSubmit, newIssue } =
    handlers();
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
          goToIssue();
        }}
      >
        Submit New Issue
      </Button>
    </div>
  );
};
export default newIssuePage;
