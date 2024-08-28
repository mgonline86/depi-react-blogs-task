import { Loader2Icon } from "lucide-react";

export default function Loader() {
  return (
    <div className="flex items-center gap-4 text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Loader2Icon className="w-10 h-10 animate-spin text-secondary" />
    </div>
  );
}
