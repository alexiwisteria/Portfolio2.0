"use client";

import React from "react";
import { ThemeProvider } from "@material-tailwind/react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
      <ThemeProvider>
        <div className="flex flex-col min-h-screen w-full bg-gray-100">
          <main className="flex-grow w-full max-w-screen-xl mx-auto p-4 md:p-6 lg:p-8">
            {children}
          </main>
        </div>
      </ThemeProvider>
  );
}

export default Layout;
