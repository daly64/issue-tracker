import { minLength, object, string } from "valibot";

export const issueSchema = object({
  title: string("title must be a string", [
    minLength(1, "please enter a title"),
  ]),
  description: string("description must be a string", [
    minLength(1, "please enter a description"),
  ]),
});