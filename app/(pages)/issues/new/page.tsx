"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { issueQuery } from "@/utils/client";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
const newIssuePage = () => {
  const router = useRouter();
  const [newIssue, setIssue] = useState({ title: "", description: "" });

  const { newIssueMutation } = issueQuery();
  const handleSubmit = () => {
    newIssueMutation(newIssue);
    router.push("/issues");
  };
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIssue({ ...newIssue, title: event.target.value });
  };
  const handleDescriptionChange = (value: string) => {
    setIssue({ ...newIssue, description: value });
  };

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

      <Button onClick={handleSubmit}>Submit New Issue</Button>
    </div>
  );
};
export default newIssuePage;
