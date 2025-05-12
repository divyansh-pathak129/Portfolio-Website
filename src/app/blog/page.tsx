import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import { DATA } from "@/data/resume";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "Explore my thoughts on tech, startups, AI, music production and more.",
  openGraph: {
    title: `Blog | ${DATA.name}`,
    description: "Explore my thoughts on tech, startups, AI, music production and more.",
    url: `${DATA.url}/blog`,
    type: "website",
    images: [
      {
        url: `${DATA.url}/api/og?title=${encodeURIComponent(`Blog | ${DATA.name}`)}&description=${encodeURIComponent("Explore my thoughts on tech, startups, AI, music production and more.")}`,
        width: 1200,
        height: 630,
        alt: `${DATA.name}'s Blog`,
      },
      {
        url: `${DATA.url}/me.jpg`,
        width: 800,
        height: 600,
        alt: `${DATA.name}'s Blog`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Blog | ${DATA.name}`,
    description: "Explore my thoughts on tech, startups, AI, music production and more.",
    images: [
      `${DATA.url}/api/og?title=${encodeURIComponent(`Blog | ${DATA.name}`)}&description=${encodeURIComponent("Explore my thoughts on tech, startups, AI, music production and more.")}`,
      `${DATA.url}/me.jpg`
    ],
  },
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">blog</h1>
      </BlurFade>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
            <Link
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <p className="tracking-tight">{post.metadata.title}</p>
                <p className="h-6 text-xs text-muted-foreground">
                  {post.metadata.publishedAt}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}
