import { Issue } from "@prisma/client";
import axios from "axios";

// axios client CRUD
const baseUrl = "/api/issues";
export const getAllIssues = () => axios.get(`${baseUrl}/all`);
export const getIssueById = (id: number) => axios.get(`${baseUrl}/one/${id}`);
export const postIssue = (issue: Issue) => axios.post(`${baseUrl}/new`, issue);
export const updateIssue = (issue: Issue) =>
  axios.patch(`${baseUrl}/update/${issue.id}`, issue);
export const deleteIssue = (id: number) =>
  axios.delete(`${baseUrl}/delete/${id}`);