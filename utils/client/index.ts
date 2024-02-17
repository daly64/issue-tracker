import { Issue } from "@/types";
import axios from "axios";

const baseUrl = "/api/issues";
export const getAllIssues = () => axios.get(`${baseUrl}/all`);
export const getIssueById = (id: number) => axios.get(`${baseUrl}/one/${id}`);
export const postIssue = (issue: Issue) => axios.post(`${baseUrl}/new`, issue);
export const updateIssue = (id: number, issue: Issue) =>
  axios.patch(`${baseUrl}/update/${id}`, issue);
export const deleteIssue = (id: number) =>
  axios.delete(`${baseUrl}/delete/${id}`);

