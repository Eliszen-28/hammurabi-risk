"use client";

import type { ReactNode } from "react";

export default function SalesAssistantButton({ className = "button", children = "Hablar con un asesor" }: { className?: string; children?: ReactNode }) {
  return <button className={`${className} sales-inline-trigger`} type="button" onClick={() => window.dispatchEvent(new Event("open-sales-assistant"))}>{children}</button>;
}
