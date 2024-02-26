import { Params } from "@/utils/api/interfaces/Params";
import {
  getIdFromParams,
  prismaDeleteIssue,
} from "@/utils/api/prisma/CRUD/issueCRUD";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, params: Params) {
  const id = getIdFromParams(params);
  const deletedIssue = await prismaDeleteIssue(id);
  return NextResponse.json(deletedIssue);
}
