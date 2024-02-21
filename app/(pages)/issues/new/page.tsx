"use client";
import { TextArea, TextField, Button, Heading } from "@radix-ui/themes";
import { useState } from "react";
import { useRouter } from "next/navigation";
const newIssuePage = () => {
  const router = useRouter();
  const [newIssue, setIssue] = useState({ title: "", description: "" });
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
    <div className="max-w-xl space-y-3">
      <Heading as="h1">New Issue</Heading>
      <TextField.Input
        placeholder="Title"
        value={newIssue.title}
        onChange={(event) => handleTitleChange(event)}
      />
      <TextArea
        placeholder="Description"
        value={newIssue.description}
        onChange={(event) => handleDescriptionChange(event)}
      />
      <Button onClick={handleSubmit}>Submit New Issue</Button>
    </div>
  );
};

export default newIssuePage;
function newIssueMutation(newIssue: { title: string; description: string }) {
  throw new Error("Function not implemented.");
}
