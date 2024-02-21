import { Issue } from "@prisma/client";
import { notification } from "antd";
import axios from "axios";
import { QueryClient, useMutation, useQuery } from "react-query";
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

  const { mutate: newIssueMutation } = useMutation({
    mutationKey: "new issue",
    mutationFn: (issue: Issue) => postIssue(issue),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: "issues" });
      notification.open({
        message: `created successfully`,
      });
    },
    onError: () => {
      notification.open({
        message: `something went wrong`,
      });
    },
  });

  return { issues, issuesIsLoading, issuesError, newIssueMutation };
}
