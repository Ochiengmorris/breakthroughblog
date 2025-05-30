import { BlogPost } from "../controllers/blogController";

let posts: BlogPost[] = [
  {
    id: "1",
    title: "Welcome to My Blog",
    content:
      "This is the first post on my new blog. I'm excited to share my thoughts and experiences with you!",
    author: "Blog Author",
    createdAt: new Date().toISOString(),
    slug: "welcome-to-my-blog",
  },
  {
    id: "2",
    title: "Getting Started with Node.js",
    content:
      "Node.js is a powerful runtime for building server-side applications. In this post, we'll explore the basics of Node.js and how to get started.",
    author: "Blog Author",
    createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
    slug: "getting-started-with-nodejs",
  },
  {
    id: "3",
    title: "The Power of React",
    content:
      "React is a popular JavaScript library for building user interfaces. In this post, we'll explore the power and features of React and how to get started.",
    author: "Blog Author",
    createdAt: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
    slug: "the-power-of-react",
  },
];
