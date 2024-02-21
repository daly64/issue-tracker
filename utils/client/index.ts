import { number } from "valibot";
// import { Issue } from "@prisma/client";

import { Issue } from "@/types";
import { notification } from "antd";
import axios from "axios";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";

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
  // const queryClient = new QueryClient();
  const queryClient = useQueryClient();
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
      queryClient.invalidateQueries(["issues"]);
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

  const { mutate: updateIssueMutation } = useMutation({
    mutationKey: ["update issue"],
    mutationFn: (issue: Issue) => updateIssue(issue),
    onSuccess: () => {
      queryClient.invalidateQueries(["issues"]);
      notification.open({
        message: `updated successfully`,
      });
    },
    onError: () => {
      notification.open({
        message: `something went wrong`,
      });
    },
  });

  const { mutate: deleteIssueMutation } = useMutation({
    mutationKey: "delete issue",
    mutationFn: (id: number) => deleteIssue(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["issues"]);
      notification.open({
        message: `deleted successfully`,
      });
    },
    onError: () => {
      notification.open({
        message: `something went wrong`,
      });
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
