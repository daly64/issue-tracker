"use client";
import { TextArea, TextField, Button, Heading } from "@radix-ui/themes";

const newIssuePage = () => {
  const handleSubmit = () => {  };

  return (
    <div className="max-w-xl space-y-3">
      <Heading as="h1">New Issue</Heading>
      <TextField.Input placeholder="Title" />
      <TextArea placeholder="Description" />
      <Button onClick={handleSubmit}>Submit New Issue</Button>
    </div>
  );
};

export default newIssuePage;
