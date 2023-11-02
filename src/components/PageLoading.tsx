import { Loader2 } from "lucide-react";
import React from "react";

const PageLoading = () => {
  return (
    <div className="flex items-center justify-center h-[400px]">
      <p className="sr-only">Loading Page</p>
      <Loader2 size={42} className="animate-spin" />
    </div>
  );
};

export default PageLoading;
