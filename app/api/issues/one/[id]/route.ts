import { NextRequest, NextResponse } from "next/server";
import { Params } from "@types";
import {
  getIdFromParams,
  prismaFindIssueById,
} from "@/app/(logic)/utils/api/prismaCRUD";

export async function GET(request: NextRequest, params: Params) {
  try {
    const id = getIdFromParams(params);
    const issue = await prismaFindIssueById(id);
    return NextResponse.json(issue);
  } catch (error) {
    return NextResponse.json(error);
  }
}
