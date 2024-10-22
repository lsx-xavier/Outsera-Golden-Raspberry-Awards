import React from "react";
import { LayoutProps } from "./types/Layout";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col relative min-h-full">
      <Header />

      <div className="flex flex-row h-[calc(100vh-4rem)] w-full">
        <Sidebar className="md:hidden lg:flex" />

        <div className="flex-1 px-4 py-2 h-[calc(100vh-4rem)] overflow-y-auto pb-4">
          {children}
        </div>
      </div>
    </div>
  );
}
