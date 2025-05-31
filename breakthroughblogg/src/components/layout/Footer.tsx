import Link from "next/link";
import React from "react";
import { ArrowUpFromLineIcon } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-primary/10 mt-8 pt-6 pb-6">
      <div className="justify-between max-w-7xl items-center  mx-auto w-full px-6 pt-8 ">
        <div className="grid grid-cols-1  md:grid-cols-2">
          <div className="flex flex-col">
            <h1 className="text-lg lg:text-xl font-bold uppercase">
              {" "}
              <span className="text-primary">Breakthrough</span> Blog
            </h1>
            <p className="mt-2 text-xs md:text-sm">
              We pray that each post inspires you, strengthens your walk with
              Christ, and helps you experience God&apos;s power in new ways.
              Stay connected with us for more messages of hope, encouragement,
              and breakthrough.
              <br />
              <br />
              <span className="font-mono">
                “But thanks be to God! He gives us the victory through our Lord
                Jesus Christ.”
              </span>{" "}
              <b>1 Corinthians 15:57 (NIV)</b> May the Lord bless you and keep
              you always.
            </p>

            <div className="mt-2 md:mt-6  flex gap-4 font-semibold  text-sm">
              <Link
                className="text-muted-foreground hover:text-primary"
                href={"/"}
              >
                Church
              </Link>
              <Link
                className="text-muted-foreground hover:text-primary"
                href={"/About"}
              >
                About
              </Link>
              <Link
                className="text-muted-foreground hover:text-primary"
                href={"/"}
              >
                Reach Us: oduyajohn66@gmail.com
              </Link>
            </div>
          </div>

          <div className="flex items-start justify-end pr-4">
            <button className="border border-primary rounded-full  hover:bg-primary/20 p-4 hover:border-primary/20 cursor-pointer transition-all transform hidden md:block">
              <ArrowUpFromLineIcon className="size-6 text-primary" />
            </button>
          </div>
        </div>

        {/* copyright */}
        <div className="flex flex-col md:flex-row md:justify-between pt-3 mt-3 border-t border-muted-foreground/20">
          <p className="text-muted-foreground text-xs text-center">
            &copy; 2023 Breakthrough Blog. All rights reserved.
          </p>

          <div>
            <p className="text-muted-foreground text-xs text-center">
              Designed and Developed by{" "}
              <span className="font-bold uppercase">johnmorris</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
