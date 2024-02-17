"use client";

import { getAllIssues, getIssueById, postIssue } from "@/utils/client";

export default function Home() {
  // let data = getAllIssues();
  // let data = getIssueById(1);
  postIssue({ title: "ffff", description: "fff" }).then((data) =>
    console.log(data.data)
  );

  return (
    <>
      <p>hello world</p>
      {/* {JSON.stringify(data)} */}
    </>
  );
}
