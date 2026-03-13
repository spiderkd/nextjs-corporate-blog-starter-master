import urlJoin from "url-join";
interface Category {
  label: string;
  tag: string;
  description: string;
}

const categories: Category[] = [
  {
    label: "Software Development",
    tag: "software-dev",
    description:
      "Web development, programming concepts, and building modern applications.",
  },
  {
    label: "Developer Tools",
    tag: "dev-tools",
    description:
      "Frameworks, tools, and workflows that make developers more productive.",
  },
  {
    label: "Tech & AI",
    tag: "tech-ai",
    description:
      "Artificial intelligence, emerging technologies, and the future of software.",
  },
  {
    label: "Screen Stories",
    tag: "screen-stories",
    description: "Movies, TV series, and anime worth watching and discussing.",
  },
  {
    label: "Books & Learning",
    tag: "books-learning",
    description:
      "Books, ideas, and knowledge that shape thinking and creativity.",
  },
  {
    label: "Personal",
    tag: "personal",
    description: "Thoughts, experiences, and reflections from my journey.",
  },
];

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const config = {
  blogId: process.env.NEXT_PUBLIC_BLOG_ID || "clvlugru90000o4g8ahxp069s",
  baseUrl,
  logoUrl: urlJoin(baseUrl, "logo.png"),
  organization: process.env.NEXT_PUBLIC_BLOG_ORGANIZATION || "Example Org",
  title: process.env.NEXT_PUBLIC_BLOG_TITLE || "Launched",
  description:
    process.env.NEXT_PUBLIC_BLOG_DESCRIPTION ||
    "Let's build something amazing!",
  categories,
};
