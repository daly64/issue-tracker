import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";


export async function GET(request: NextRequest) {
   try {
   const issues = await prisma.issue.findMany(); 
   return NextResponse.json(issues);
  } catch (error) {
    return NextResponse.json(error);
  }
  
}
