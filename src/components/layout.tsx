"use client";

import React from "react";
import { ThemeProvider } from "@material-tailwind/react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
      <ThemeProvider>
        <div className="bg-[#FAFAFA] min-h-screen w-full">
          {children}
        </div>
      </ThemeProvider>
  );
}

export default Layout;
