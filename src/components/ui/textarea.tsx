
import { TextareaHTMLAttributes } from "react";
export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className="border rounded px-3 py-2 w-full" {...props} />;
}
