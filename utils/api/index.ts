import { Params } from "@/types";
import prisma from "@/prisma/client";
import { Issue } from "@prisma/client";
import { safeParse } from "valibot";
import { issueSchema } from "@/validationSchemas";

export function getIdFromParams(params: Params) {
  return Number.parseInt(params.params.id);
}

export async function prismaFindIssueById(id: number) {
  const issue: Issue | null = await prisma.issue.findUnique({
    where: { id: id },
  });
  return issue == null ? "issue not found" : issue;
}

export async function prismaFindAllIssues() {
  const issues = await prisma.issue.findMany();
  return issues;
}

export async function prismaNewIssue(issue: Issue) {
  const validation = safeParse(issueSchema, issue);
  if (validation.success) {
    const newIssue = await prisma.issue.create({ data: issue });
    return newIssue;
  } else {
    let error: string[] = [];
    validation.issues.map((issue) => error.push(issue.message));
    return error;
  }
}
export async function prismaUpdateIssue(id: number, issue: Issue) {
  const validation = safeParse(issueSchema, issue);
  try {
    if (validation.success) {
      const updatedIssue = await prisma.issue.update({
        where: { id: id },
        data: { ...issue, updatedAt: new Date(Date.now()) },
      });
      return updatedIssue;
    } else {
      let error: string[] = [];
      validation.issues.map((issue) => error.push(issue.message));
      return error;
    }
  } catch (error: any) {
    return error.meta.cause;
  }
}

export async function prismaDeleteIssue(id: number) {
  try {
    const deletedIssue = await prisma.issue.delete({ where: { id: id } });
    console.log(deletedIssue);

    return deletedIssue;
  } catch (error: any) {
    return error.meta.cause;
  }
}
