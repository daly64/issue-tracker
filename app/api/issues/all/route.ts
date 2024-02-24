import { prismaFindAllIssues } from "@/app/(logic)/utils/api/prismaCRUD";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const issues = await prismaFindAllIssues();
    return NextResponse.json(issues);
  } catch (error) {
    return NextResponse.json(error);
  }
}
