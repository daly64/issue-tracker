import { Issue } from "@prisma/client";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  getAllIssues,
  postIssue,
  updateIssue,
  deleteIssue,
  getIssueById,
} from "../axios/issueCRUD";

// reactQuery

export function issueQuery() {
  const queryClient = useQueryClient();

  const {
    data,
    isLoading: issuesIsLoading,
    error: issuesError,
  } = useQuery({
    queryKey: "issues",
    queryFn: getAllIssues,
    refetchInterval: 1000,
  });
  const issues = data?.data as Issue[];

  const singleIssue = (id: number) => {
    const { data, isLoading, error } = useQuery({
      queryKey: ["issue", id],
      queryFn: () => getIssueById(id),
      cacheTime: 0,
    });
    return {
      singleIssueIsLoading: isLoading,
      singleIssueError: error,
      Issue: data?.data as Issue,
    };
  };

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
    singleIssue,
    issues,
    issuesIsLoading,
    issuesError,
    newIssueMutation,
    updateIssueMutation,
    deleteIssueMutation,
  };
}
