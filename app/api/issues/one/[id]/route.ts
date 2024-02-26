import { Params } from "@/utils/api/interfaces/Params";
import {
  getIdFromParams,
  prismaFindIssueById,
} from "@/utils/api/prisma/CRUD/issueCRUD";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, params: Params) {
  try {
    const id = getIdFromParams(params);
    const issue = await prismaFindIssueById(id);
    return NextResponse.json(issue);
  } catch (error) {
    return NextResponse.json(error);
  }
}
