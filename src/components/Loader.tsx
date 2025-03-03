import { LoaderIcon } from "lucide-react";

export function Loader() {
  return (
    <div className="h-[calc(100vh-4rem-1px)] flex items-center justify-center">
      <LoaderIcon className="h-8 w-8 animate-spin text-muted-foreground" />
    </div>
  );
}
