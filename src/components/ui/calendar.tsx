
// Placeholder Calendar — replace with real component or library
import { useState } from "react";
export function Calendar({ selected, onSelect }:{ selected?: Date; onSelect: (d:Date)=>void }) {
  const [val,setVal]=useState<Date|undefined>(selected);
  return <input type="date" className="border p-2 rounded" value={val?.toISOString().substring(0,10) || ''} onChange={e=>{const d=new Date(e.target.value); setVal(d); onSelect(d);}} />;
}
