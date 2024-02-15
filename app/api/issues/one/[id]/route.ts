import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    let id = Number.parseInt(params.id);

    const issue = await prisma.issue.findUnique({ where: { id: id } });
    return NextResponse.json(issue == null ? "not found" : issue);
  } catch (error) {
    console.log(error);

    return NextResponse.json(error);
  }
}
