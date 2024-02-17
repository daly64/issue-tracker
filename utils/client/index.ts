import { Issue } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";
import { value } from "valibot";

const baseUrl = "/api/issues";
export function getAllIssues() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(`${baseUrl}/all`);
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return data as Issue[];
}
export function getIssueById(id: number) {
  const [data, setData] = useState({});
  const getData = async () => {
    const { data } = await axios.get(`${baseUrl}/one/${id}`);
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return data as Issue;
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
