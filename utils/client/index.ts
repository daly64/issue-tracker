import { Issue } from "@prisma/client";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";

// axios client CRUD
const baseUrl = "/api/issues";
export const getAllIssues = () => axios.get(`${baseUrl}/all`);
export const getIssueById = (id: number) => axios.get(`${baseUrl}/one/${id}`);
export const postIssue = (issue: Issue) => axios.post(`${baseUrl}/new`, issue);
export const updateIssue = (issue: Issue) =>
  axios.patch(`${baseUrl}/update/${issue.id}`, issue);
export const deleteIssue = (id: number) =>
  axios.delete(`${baseUrl}/delete/${id}`);

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
    mutationFn: (issue: Issue|any) => postIssue(issue),
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
