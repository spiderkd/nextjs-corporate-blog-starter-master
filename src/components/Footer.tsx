import { config } from "@/config";
import { Button } from "./ui/button";
import { Globe, LinkedinIcon, Rss } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export const Footer = () => {
  return (
    <div className="container mx-auto my-4 px-4 max-w-6xl">
      <div className="flex justify-between items-center">
        <div className="text-sm mt-4">
          © {config.organization} {new Date().getFullYear()}
        </div>
        <div className="text-xs text-muted-foreground hidden lg:block">
          <Link href={`/`}>Blog powered by wisp</Link>
        </div>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          {/* Portfolio */}
          <Link href="https://kediayash.in/" target="_blank">
            <Button variant="ghost" size="icon" aria-label="Portfolio">
              <Globe className="w-4 h-4" />
            </Button>
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/yash-kedia-dev/"
            target="_blank"
          >
            <Button variant="ghost" size="icon" aria-label="LinkedIn">
              <LinkedinIcon className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/rss">
            <Button variant="ghost" size="icon" aria-label="RSS feed">
              <Rss className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
