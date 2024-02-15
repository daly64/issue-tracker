import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { safeParse} from "valibot";
import { issueSchema } from "@/validationSchemas";


export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = safeParse(issueSchema, body);
  if (validation.success) {
    const newIssue = await prisma.issue.create({ data: body });
    return NextResponse.json(newIssue);
  } else {
    let error: string[] = [];
    validation.issues.map((issue) => error.push(issue.message));
    return NextResponse.json(error);
  }
}
