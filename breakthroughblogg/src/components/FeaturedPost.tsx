import React from "react";
import { Card } from "./ui/card";
import image1 from "@/images/image2.jpg";
import Image from "next/image";
import { ArrowRight, DotIcon } from "lucide-react";
import { Button } from "./ui/button";

export interface Post {
  title: string;
  description: string;
  slug: string;
  author: string;
  image: string;
  date: string;
}

const FeaturedPost = ({ post }: { post: Post }) => {
  return (
    <Card className="p-4 lg:p-6 grid  md:grid-cols-2">
      <div className="rounded-xl overflow-hidden md:hidden">
        <Image src={image1} alt="HeroImage" />
      </div>

      {/* Left-side */}
      <div className="flex flex-col">
        <h3 className="flex items-center text-muted-foreground/70 text-xs uppercase font-semibold">
          <span>02 May 2023</span>
          <DotIcon />
          <span>{post.author ?? "Anonymous"}</span>
        </h3>

        {/* Title */}
        <h1 className="xl:text-5xl text-2xl md:text-3xl lg:text-4xl mt-1  font-bold line-clamp-3">
          {post.title ?? "Top 5 Destinations for Solo Travelers in 2025"}
        </h1>

        {/* Description */}
        <p className="lg:mt-4 mt-2 text-muted-foreground/80 text-sm lg:text-base leading-tight lg:leading-normal line-clamp-3  lg:line-clamp-6">
          {post.description ??
            "The rise of EVs is shaping the future of transportation and the environment."}
        </p>
        <div className="grow flex flex-col justify-end items-baseline mt-2 md:mt-0">
          <Button variant={"outline"} className=" uppercase flex items-center">
            Read More
            <ArrowRight className="" />
          </Button>
        </div>
      </div>

      {/* Right-side */}
      <div className="rounded-xl overflow-hidden hidden md:block">
        <Image src={image1} alt="HeroImage" />
      </div>
    </Card>
  );
};

export default FeaturedPost;
