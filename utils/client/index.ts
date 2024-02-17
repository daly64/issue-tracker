import { Issue } from "@/types";
import axios from "axios";

const baseUrl = "/api/issues";
export const getAllIssues = () => axios.get(`${baseUrl}/all`);

export function getIssueById(id: number) {
  return axios.get(`${baseUrl}/one/${id}`);
}
export function postIssue(issue: Issue) {
  return axios.post(`${baseUrl}/new`, issue);
}
export function updateIssue(id: number, issue: Issue) {
  return axios.patch(`${baseUrl}/update/${id}`, issue);
}
export function deleteIssue(id: number) {
  return axios.delete(`${baseUrl}/delete/${id}`);
}
