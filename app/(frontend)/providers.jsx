"use client";

import { AppContextProvider } from "@/contexts/AppContext";
import { ClerkProvider } from "@clerk/nextjs";

export function Providers({ children }) {
  return (
    <ClerkProvider>
      <AppContextProvider>{children}</AppContextProvider>
    </ClerkProvider>
  );
}
