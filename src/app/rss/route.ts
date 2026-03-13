export const dynamic = "force-dynamic";
export const revalidate = 3600; // 1 hour

import { NextResponse } from "next/server";
import RSS from "rss";
import urlJoin from "url-join";
import { wisp } from "../../lib/wisp";
import { config } from "@/config";

const baseUrl = config.baseUrl;

export async function GET() {
  const result = await wisp.getPosts({ limit: 20 });

  console.log("Generating RSS feed with posts:", result.posts);

  const posts = result.posts.map((post) => {
    return {
      title: post.title,
      description: post.description || "",
      url: urlJoin(baseUrl, `/post/${post.slug}`),
      date: post.publishedAt || new Date(),
      categories: post.tags?.map((tag) => tag.name) || [],
      image: post.image || null,
    };
  });

  // const feed = new RSS({
  //   title: config.title,
  //   description: config.description,
  //   site_url: baseUrl,
  //   feed_url: urlJoin(baseUrl, "/rss"),

  //   pubDate: new Date(),

  // });
  const feed = new RSS({
    title: config.title,
    description: config.description,
    site_url: baseUrl,
    feed_url: urlJoin(baseUrl, "/rss"),
    pubDate: new Date(),

    custom_namespaces: {
      media: "http://search.yahoo.com/mrss/",
    },
  });
  posts.forEach((post) => {
    //   feed.item(post);
    // });
    feed.item({
      title: post.title,
      description: post.description,
      url: post.url,
      date: post.date,
      categories: post.categories,

      custom_elements: post.image
        ? [
            {
              "media:content": {
                _attr: {
                  url: post.image,
                  medium: "image",
                },
              },
            },
          ]
        : [],
    });
  });

  const xml: string = feed.xml({ indent: true });

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/rss+xml",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "GET",
    },
  });
}
