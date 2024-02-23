"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { issueQuery } from "@/utils/client";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";
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
  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setIssue({ ...newIssue, description: event.target.value });
  };

  return (
    <div className="new-issue-page">
      <h1>New Issue</h1>
      <InputText 
      className="input"
        keyfilter="alpha"
        placeholder="title"
        onChange={(event) => handleTitleChange(event)}
      />

      <InputTextarea
      className="input"
        placeholder="Description"
        value={newIssue.description}
        onChange={(event) => handleDescriptionChange(event)}
        rows={5}
        cols={30}
      />

      <Button onClick={handleSubmit}>Submit New Issue</Button>
    </div>
  );
};
export default newIssuePage;
