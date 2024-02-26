import { prismaNewIssue } from "@/utils/api/prisma/CRUD/issueCRUD";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newIssue = await prismaNewIssue(body);
  return NextResponse.json(newIssue);
}
