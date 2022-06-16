import React from "react";

export function BookDetail({ name }: { name?: string }) {
  return <>{name ?? "-"}</>;
}
