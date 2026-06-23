import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { LuUser } from "react-icons/lu";

import { CiCalendar } from "react-icons/ci";
import Link from "next/link";

type BlogCardProps = {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  imageSrc: string;
};

const BlogCard = ({
  id,
  title,
  description,
  author,
  date,
  imageSrc,
}: BlogCardProps) => {
  return (
    <Link href={`/blog/${id}`}>
      <div className="w-full">
        <Card className="group relative mx-auto min-h-full w-full max-w-md cursor-pointer gap-3 pt-0 rounded-md">
          <div className="aspect-video overflow-hidden bg-muted">
            <Image
              src={imageSrc}
              width={400}
              height={400}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
            />
          </div>
          <CardHeader className="gap-2">
            <CardTitle className="line-clamp-2 text-xl font-semibold leading-tight text-foreground">
              {title}
            </CardTitle>
            <CardDescription className="line-clamp-3 text-[14.5px] font-normal leading-5 tracking-normal text-[#52525b]">
              {description}
            </CardDescription>
          </CardHeader>
          <CardFooter className="mt-auto text-zinc-500 text-xs font-normal">
            <div className="flex w-full items-center justify-between gap-3">
              <div className="flex items-center justify-center gap-1">
                <LuUser size="16px" />
                <p>{author}</p>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <CiCalendar size="16px" />
                <p>{date}</p>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </Link>
  );
};

export default BlogCard;
