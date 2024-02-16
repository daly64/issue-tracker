import { NextRequest, NextResponse } from "next/server";
import { Params } from "@/types";
import { getIdFromParams, prismaUpdateIssue } from "@/utils/api";

export async function PATCH(request: NextRequest, params: Params) {
  const id = getIdFromParams(params);
  const body = await request.json();
  const updatedIssue = await prismaUpdateIssue(id, body);
  return NextResponse.json(updatedIssue);
}
