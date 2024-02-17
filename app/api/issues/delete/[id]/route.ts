import { NextRequest, NextResponse } from "next/server";
import { Params } from "@/types";
import { getIdFromParams, prismaDeleteIssue } from "@/utils/api";

export async function DELETE(request: NextRequest, params: Params) {
  const id = getIdFromParams(params);
  const deletedIssue = await prismaDeleteIssue(id);
  return NextResponse.json(deletedIssue);
}