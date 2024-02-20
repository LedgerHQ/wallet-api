import { Suspense } from "react";
import { Editor } from "../src/Editor";

export default function Page() {
  return (
    <Suspense>
      <Editor />
    </Suspense>
  );
}
