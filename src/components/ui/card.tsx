
import { ReactNode } from "react";
import clsx from "clsx";
export function Card({ children, className='' }: { children: ReactNode; className?: string }) {
  return <div className={clsx("bg-white rounded-lg border shadow-sm", className)}>{children}</div>;
}
export function CardContent({ children, className='' }: { children: ReactNode; className?: string }) {
  return <div className={clsx("p-4", className)}>{children}</div>;
}
