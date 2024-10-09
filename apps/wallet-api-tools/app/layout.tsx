import type { PropsWithChildren } from "react";
import "../styles/globals.css";
import { TopBar } from "./TopBar";
import Head from "./head";

export default function RootLayout({ children }: PropsWithChildren<object>) {
  return (
    <html className="dark">
      <Head />
      <body className="flex h-screen flex-col bg-white dark:bg-zinc-900 dark:text-white">
        <TopBar />
        <main className="flex flex-1 flex-col overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
