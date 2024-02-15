import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";


export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = Number.parseInt(params.id);
    try {
       const newIssue = await prisma.issue.delete({ where: { id: id } });
    return NextResponse.json(newIssue);   
    } catch (error) {
      return NextResponse.json(error);  
    }

}
