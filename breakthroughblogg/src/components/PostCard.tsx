import React from "react";
import { Post } from "./FeaturedPost";
import { Card } from "./ui/card";
import Image from "next/image";
import { ArrowRight, DotIcon } from "lucide-react";
import image1 from "@/images/image3.jpg";
import { Button } from "./ui/button";

const PostCard = ({ post }: { post: Post }) => {
  return (
    <Card className="max-w-xl w-full p-0 overflow-hidden gap-0">
      <div className="h-58">
        <Image
          src={image1}
          alt={post.title}
          // width={500}
          // height={500}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="py-2 px-4 flex flex-col">
        <h3 className="flex items-center text-muted-foreground/70 text-xs uppercase font-semibold">
          <span>02 May 2023</span>
          <DotIcon />
          <span>{post.author ?? "Anonymous"}</span>
        </h3>
        <h1 className="xl:text-xl text-2xl md:text-3xl lg:text-2xl leading-tight line-clamp-3  font-bold">
          {post.title ?? "Top 5 Destinations for Solo Travelers in 2025"}
        </h1>
        <div className="grow flex flex-col justify-end items-baseline">
          <Button variant="link" className="mt-3  flex items-center uppercase">
            Read More
            <ArrowRight className="" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
