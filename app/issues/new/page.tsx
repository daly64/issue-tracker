"use client";
import { TextArea, TextField, Button } from "@radix-ui/themes";
import React from "react";
const newIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Input placeholder="Title" />
      <TextArea placeholder="Description" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default newIssuePage;
