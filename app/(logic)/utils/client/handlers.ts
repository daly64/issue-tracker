import { useState } from "react";
import { issueQuery } from "./reactQuery";
import { Issue, Status } from "@prisma/client";

export default function handlers() {
  const [newIssue, setIssue] = useState({ title: "", description: "" });

  const { newIssueMutation, deleteIssueMutation, updateIssueMutation } =
    issueQuery();

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIssue({ ...newIssue, title: event.target.value });
  };
  const handleDescriptionChange = (value: string) => {
    setIssue({ ...newIssue, description: value });
  };
  const handleSubmit = () => {
    newIssueMutation(newIssue);
  };

  const handleDelete = (issue: Issue) => {
    deleteIssueMutation(issue.id);
  };
  const handleUpdate = (issue: Issue) => {
    updateIssueMutation({ ...issue, status: Status.CLOSED });
  };

  return {
    handleSubmit,
    handleTitleChange,
    handleDescriptionChange,
    handleDelete,
    handleUpdate,
    newIssue,
  };
}
/* export const {
  handleSubmit,
  handleTitleChange,
  handleDescriptionChange,
  handleDelete,
  handleUpdate,
  newIssue,
} = handlers(); */
