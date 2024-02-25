import { issueQuery } from "./reactQuery";
import { Issue, Status } from "@prisma/client";

export const handlers = () => {
  const { newIssueMutation, deleteIssueMutation, updateIssueMutation } =
    issueQuery();
  let newIssue = { title: "", description: "" };

  return {
    newIssue: newIssue,
    handleSubmit: () => newIssueMutation(newIssue),
    handleTitleChange: (event: any) =>
      (newIssue = { ...newIssue, title: event.target.value }),
    handleDescriptionChange: (value: string) =>
      (newIssue = { ...newIssue, description: value }),
    handleDelete: (issue: Issue) => deleteIssueMutation(issue.id),
    handleUpdate: (issue: Issue) =>
      updateIssueMutation({ ...issue, status: Status.CLOSED }),
  };
};
