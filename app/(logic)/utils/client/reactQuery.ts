import { Issue } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  getAllIssues,
  postIssue,
  updateIssue,
  deleteIssue,
  getIssueById,
} from "./axiosCRUD";

// reactQuery

export function issueQuery() {
  const queryClient = useQueryClient();
  const {
    data,
    isLoading: issuesIsLoading,
    error: issuesError,
  } = useQuery({ queryKey: "issues", queryFn: getAllIssues });
  const issues = data?.data as Issue[];

  const { mutate: newIssueMutation } = useMutation({
    mutationKey: "new issue",
    mutationFn: (issue: Issue | any) => postIssue(issue),
    onSuccess: () => {
      queryClient.invalidateQueries(["issues"]);
    },
  });

  const { mutate: updateIssueMutation } = useMutation({
    mutationKey: ["update issue"],
    mutationFn: (issue: Issue) => updateIssue(issue),
    onSuccess: () => {
      queryClient.invalidateQueries(["issues"]);
    },
  });

  const { mutate: deleteIssueMutation } = useMutation({
    mutationKey: "delete issue",
    mutationFn: (id: number) => deleteIssue(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["issues"]);
    },
  });

  return {
    issues,
    issuesIsLoading,
    issuesError,
    newIssueMutation,
    updateIssueMutation,
    deleteIssueMutation,
  };
}
