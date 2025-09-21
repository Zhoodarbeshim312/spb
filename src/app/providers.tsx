"use client";

import { setupStore } from "@/toolkit";
import { Provider } from "react-redux";
const store = setupStore();
export function Providers({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
