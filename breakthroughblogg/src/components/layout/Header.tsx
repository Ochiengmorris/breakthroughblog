import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

const HeaderLinks = [
  { name: "Create Post", href: "/create" },
  { name: "Church", href: "/church" },
  { name: "About", href: "/about" },
];

const Header = () => {
  return (
    <div className="bg-card/80 sticky backdrop-blur-md  top-0">
      <div className="flex justify-between max-w-7xl items-center  mx-auto w-full px-6 py-2">
        <h1 className="text-xl font-bold">
          <span className="text-primary">Breakthrough</span> Blog
        </h1>

        <Button className="md:hidden" size={"sm"} variant="default">
          <Menu />
        </Button>

        <nav className="gap-4 items-center hidden md:flex">
          {HeaderLinks.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              className="hover:underline-offset-4 hover:underline font-semibold transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
          <Button size={"sm"} variant="default" className="font-semibold">
            Get in touch
          </Button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
