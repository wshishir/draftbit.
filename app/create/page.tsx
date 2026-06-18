"use client";
import Tiptap from "@/components/TipTap";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { FaFileImage, FaLocationArrow } from "react-icons/fa";
import { LuArrowLeft } from "react-icons/lu";

const handleSubmit = () => {
  toast.success("Posted Successfully");
};

const page = () => {
  return (
    <article
      className="mx-auto w-full px-6 py-12 sm:px-8"
      style={{ maxWidth: "1000px" }}
    >
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-1.5 text-md font-medium text-black"
      >
        <LuArrowLeft className="size-4" />
        Back
      </Link>
      <div className="mb-9">
        <h2 className="text-4xl font-bold mb-2">Create New Post</h2>
        <p className="text-zinc-500">What&apos;s on your mind today?</p>
      </div>
      <div className="mb-4">
        <p className="font-medium text-xl mb-1">Title</p>
        <Input
          className="h-10 placeholder:text-lg placeholder:text-zinc-400 text-lg md:text-lg bg-transparent focus-visible:ring-0 focus-visible:border-input"
          placeholder="Enter a descriptive title"
          required
          type="text"
        />
      </div>
      <div className="mb-4">
        <p className="font-medium text-xl mb-1">Description</p>
        <Textarea
          className="resize-y placeholder:text-lg placeholder:text-zinc-400 text-lg md:text-lg bg-transparent focus-visible:ring-0 focus-visible:border-input"
          placeholder="Write a brief description"
        />
      </div>
      <div className="mb-4">
        <p className="font-medium text-xl mb-1">Cover Image</p>
        <button className="text-zinc-500 border-dashed border-2 w-full py-36 rounded-xl border-zinc-300 mb-2 tracking-normal items-center justify-center flex flex-col gap-2 text-sm">
          <FaFileImage size={30} className="text-zinc-400" />
          <span className="font-medium">No cover image selected</span>
        </button>
        <Input
          className="h-10  placeholder:text-zinc-400 text-lg md:text-lg bg-transparent focus-visible:ring-0 focus-visible:border-input"
          required
          type="file"
        />
      </div>
      <div className="mb-5">
        <p className="font-medium text-xl mb-1">Content</p>
        <Tiptap />
      </div>
      <div className="flex  items-center justify-center">
        <Button
          variant="default"
          className="h-11 px-6 cursor-pointer gap-2 bg-foreground text-base font-semibold shadow-sm hover:bg-foreground/90"
          onClick={handleSubmit}
        >
          Post Blog
          <FaLocationArrow size={4} />
        </Button>
      </div>
    </article>
  );
};

export default page;
