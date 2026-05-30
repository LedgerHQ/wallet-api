import { Suspense } from "react";
import { Editor } from "./Editor";
import { TopBar } from "./TopBar";

export function App() {
  return (
    <div className="flex h-screen flex-col bg-white dark:bg-zinc-900 dark:text-white">
      <TopBar />
      <main className="flex flex-1 flex-col overflow-hidden">
        <Suspense>
          <Editor />
        </Suspense>
      </main>
    </div>
  );
}
