import { NextRequest, NextResponse } from "next/server";
import { prismaNewIssue } from "@/app/(logic)/utils/api/prismaCRUD";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newIssue = await prismaNewIssue(body);
  return NextResponse.json(newIssue);
}
