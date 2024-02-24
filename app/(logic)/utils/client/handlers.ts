import { useState } from "react";
import { issueQuery } from "./reactQuery";
import { useRouter } from "next/navigation";

export default function handlers() {
  const [newIssue, setIssue] = useState({ title: "", description: "" });

  const { newIssueMutation } = issueQuery();

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIssue({ ...newIssue, title: event.target.value });
  };
  const handleDescriptionChange = (value: string) => {
    setIssue({ ...newIssue, description: value });
  };
  const handleSubmit = () => {
    newIssueMutation(newIssue);
  };
  return { handleSubmit, handleTitleChange, handleDescriptionChange, newIssue };
}
 exports.handlers = handlers