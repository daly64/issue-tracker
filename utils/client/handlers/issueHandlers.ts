import { issueQuery } from "../reactQuery/issueQuery";
import { Issue, Status } from "@prisma/client";

export const issueHandlers = () => {
  const { newIssueMutation, deleteIssueMutation, updateIssueMutation } =
    issueQuery();
  let newIssue = { title: "", description: "", status: Status.OPEN };

  return {
    newIssue: newIssue,
    handleSubmit: () => newIssueMutation(newIssue),
    handleTitleChange: (event: any) =>
      (newIssue = { ...newIssue, title: event.target.value }),
    handleDescriptionChange: (value: string) =>
      (newIssue = { ...newIssue, description: value }),
    handleStatusChange: (value: any) =>
      (newIssue = { ...newIssue, status: value }),
    handleDelete: (issue: Issue) => deleteIssueMutation(issue.id),
    handleUpdate: (
      title: string,
      description: string,
      status: any,
      oldIssue: Issue
    ) => {
      updateIssueMutation({
        ...oldIssue,
        title: title,
        description: description,
        status: status,
      });
    },
  };
};
