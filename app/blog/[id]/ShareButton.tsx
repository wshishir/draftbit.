"use client";

import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { LuShare2 } from "react-icons/lu";

const ShareButton = () => {
  const handleShare = async () => {
    await navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard")
  };

  return (
    <Button
      variant="ghost"
      onClick={handleShare}
      className="inline-flex cursor-pointer items-center gap-2  text-sm text-zinc-500 sm:ml-auto hover:bg-transparent"
    >
      <LuShare2 className="size-4" />
      Share
    </Button>
  );
};

export default ShareButton;
