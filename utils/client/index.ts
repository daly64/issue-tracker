import { Issue } from "@prisma/client";
import axios from "axios";
import { QueryClient, useQuery } from "react-query";
import { isQueryKey } from "react-query/types/core/utils";

// axios client CRUD
const baseUrl = "/api/issues";
export const getAllIssues = () => axios.get(`${baseUrl}/all`);
export const getIssueById = (id: number) => axios.get(`${baseUrl}/one/${id}`);
export const postIssue = (issue: Issue) => axios.post(`${baseUrl}/new`, issue);
export const updateIssue = (id: number, issue: Issue) =>
  axios.patch(`${baseUrl}/update/${id}`, issue);
export const deleteIssue = (id: number) =>
  axios.delete(`${baseUrl}/delete/${id}`);

// reactQuery

export function issueQuery() {
  const queryClient = new QueryClient();
  const {
    data,
    isLoading: issuesIsLoading,
    error: issuesError,
  } = useQuery({ queryKey: "issues", queryFn: getAllIssues });
  const issues = data?.data as Issue[];

  return { issues, issuesIsLoading, issuesError };
}
