import { Params } from "@/utils/api/interfaces/Params";
import {
  getIdFromParams,
  prismaUpdateIssue,
} from "@/utils/api/prisma/CRUD/issueCRUD";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest, params: Params) {
  const id = getIdFromParams(params);
  const body = await request.json();
  const updatedIssue = await prismaUpdateIssue(id, body);
  return NextResponse.json(updatedIssue);
}
