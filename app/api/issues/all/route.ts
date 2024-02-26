import { prismaFindAllIssues } from "@/utils/api/prisma/CRUD/issueCRUD";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const issues = await prismaFindAllIssues();
    return NextResponse.json(issues);
  } catch (error) {
    return NextResponse.json(error);
  }
}
