import { NextRequest, NextResponse } from "next/server";
import { prismaNewIssue } from "@/utils/api";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const newIssue = await prismaNewIssue(body);
  return NextResponse.json(newIssue);
}
