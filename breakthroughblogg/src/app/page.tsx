// import Image from "next/image";

import FeaturedPost from "@/components/FeaturedPost";
import PostCard from "@/components/PostCard";

const posts = [
  {
    title: "How to Strengthen Your Daily Walk with God in your everyday life",
    description:
      "Explore practical steps to deepen your relationship with God through prayer, scripture, and reflection. Explore practical steps to deepen your relationship with God through prayer, scripture, and reflection. Explore practical steps to deepen your relationship with God through prayer, scripture, and reflection.",
    slug: "daily-walk-with-god",
    author: "Pastor John Adams",
    image: "https://via.placeholder.com/600x400?text=Prayer",
    date: "2025-05-20",
  },
  {
    title: "What Does It Mean to Live a Christ-Centered Life?",
    description:
      "Understanding what it truly means to let Christ guide every part of your life.",
    slug: "christ-centered-life",
    author: "Sarah Williams",
    image: "https://via.placeholder.com/600x400?text=Faith",
    date: "2025-05-14",
  },
  {
    title: "5 Bible Verses for When You Feel Anxious",
    description:
      "Let God’s Word calm your heart and bring peace in moments of worry.",
    slug: "verses-for-anxiety",
    author: "Michael Lee",
    image: "https://via.placeholder.com/600x400?text=Bible",
    date: "2025-05-08",
  },
  {
    title: "Why Community Matters in the Body of Christ",
    description:
      "Discover the importance of church community and how to stay connected in faith.",
    slug: "importance-of-community",
    author: "Jessica Thompson",
    image: "https://via.placeholder.com/600x400?text=Community",
    date: "2025-04-28",
  },
  {
    title: "Testimony: From Brokenness to Redemption",
    description:
      "A powerful personal story of how God healed and restored a life once lost.",
    slug: "testimony-redemption",
    author: "James Carter",
    image: "https://via.placeholder.com/600x400?text=Testimony",
    date: "2025-04-18",
  },
  {
    title: "How to Get the Most Out of Sunday Sermons",
    description:
      "Tips for preparing your heart and applying the message throughout your week.",
    slug: "sunday-sermon-tips",
    author: "Emily Rodriguez",
    image: "https://via.placeholder.com/600x400?text=Sermon",
    date: "2025-04-10",
  },
  {
    title: "The Power of Worship: More Than Just a Song",
    description:
      "Worship is a lifestyle — here's how to live it daily and intentionally.",
    slug: "power-of-worship",
    author: "David Kim",
    image: "https://via.placeholder.com/600x400?text=Worship",
    date: "2025-03-31",
  },
  {
    title: "Family Devotionals: Building Faith at Home",
    description:
      "Simple ways to bring scripture and prayer into your family's daily routine.",
    slug: "family-devotionals",
    author: "Rachel Martin",
    image: "https://via.placeholder.com/600x400?text=Family+Faith",
    date: "2025-03-22",
  },
  {
    title: "Serving with Purpose: Finding Your Role in the Church",
    description:
      "God has gifted each of us uniquely—find out how you can serve with joy.",
    slug: "serving-in-church",
    author: "Mark Johnson",
    image: "https://via.placeholder.com/600x400?text=Serve",
    date: "2025-03-15",
  },
  {
    title: "Understanding God’s Grace in Difficult Times",
    description:
      "A look at how God's grace sustains us even when life gets hard.",
    slug: "grace-in-trials",
    author: "Anna Bell",
    image: "https://via.placeholder.com/600x400?text=Grace",
    date: "2025-03-01",
  },
];

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2 tracking-[-.01em]">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
    //           src/app/page.tsx
    //         </code>
    //         .
    //       </li>
    //       <li className="tracking-[-.01em]">
    //         Save and see your changes instantly.
    //       </li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>
    <div className="p-4 md:p-6 max-w-7xl mx-auto w-full">
      <FeaturedPost post={posts[0]} />

      <div className="mt-18">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {posts.slice(1).map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
