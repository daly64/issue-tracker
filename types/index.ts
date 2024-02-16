import { Status } from "@/enums";

export interface Issue {
  id: Number;
  title: String;
  description: String;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
}

export interface Params {
  params: { id: string };
}

export function numId(params: { id: string }) {
  return Number.parseInt(params.id);
}
