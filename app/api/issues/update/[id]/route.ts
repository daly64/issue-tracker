import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { safeParse } from "valibot";
import { issueSchema } from "@/validationSchemas";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number.parseInt(params.id);

  const body = await request.json();
  const validation = safeParse(issueSchema, body);
  if (validation.success) {
    const newIssue = await prisma.issue.update({
      where: { id: id },
      data: body,
    });
    return NextResponse.json(newIssue);
  } else {
    let error: string[] = [];
    validation.issues.map((issue) => error.push(issue.message));
    return NextResponse.json(error);
  }
}
