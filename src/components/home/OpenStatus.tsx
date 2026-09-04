"use client";

import { useEffect, useState } from "react";
import { getOpenStatus } from "@/lib/utils";

export function OpenStatus() {
  const [status, setStatus] = useState<{ open: boolean; label: string } | null>(null);

  useEffect(() => {
    function tick() {
      setStatus(getOpenStatus(new Date()));
    }
    tick();
    const interval = setInterval(tick, 60_000);
    return () => clearInterval(interval);
  }, []);

  if (!status) return null;

  return (
    <p className="flex items-center gap-2 text-sm font-medium">
      <span
        className={`h-2 w-2 rounded-full ${status.open ? "bg-cucumber" : "bg-salmon"}`}
        aria-hidden="true"
      />
      {status.label}
    </p>
  );
}
