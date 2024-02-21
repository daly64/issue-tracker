"use client";
import { TextArea, TextField, Button, Heading } from "@radix-ui/themes";
import { notification } from "antd";
import { useMutation } from "react-query";
import { Issue } from "@/types";
import { postIssue } from "@/utils/client";
import { useState } from "react";
import { useRouter } from "next/navigation";
const newIssuePage = () => {
  const router = useRouter();
  const [newIssue, setIssue] = useState({ title: "", description: "" });
  const mutation = useMutation("new issue", (issue: Issue) => postIssue(issue));
  const handleSubmit = () => {
    mutation.mutate(newIssue);
    notification.open({
      message: `${newIssue.title} created successfully`,
    });
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
