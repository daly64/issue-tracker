import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { Params, numId } from "@/types";

export async function GET(request: NextRequest, { params }: Params) {
  try {
    let id = numId(params);

    const issue = await prisma.issue.findUnique({ where: { id: id } });
    return NextResponse.json(issue == null ? "not found" : issue);
  } catch (error) {
    console.log(error);

    return NextResponse.json(error);
  }
}
