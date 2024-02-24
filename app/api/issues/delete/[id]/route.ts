import { Params } from "@types";
import {
  getIdFromParams,
  prismaDeleteIssue,
} from "@/app/(logic)/utils/api/prismaCRUD";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest, params: Params) {
  const id = getIdFromParams(params);
  const deletedIssue = await prismaDeleteIssue(id);
  return NextResponse.json(deletedIssue);
}
