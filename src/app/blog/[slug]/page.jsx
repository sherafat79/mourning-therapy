import Link from "next/link";
import Image from "next/image";
import { posts, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | صحرا تجسم`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const paragraphs = post.body
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="w-full flex flex-col">
      {/* Hero image banner */}
      <div className="h-72 w-full relative overflow-hidden flex justify-center items-end pb-10">
        <Image
          src={post.thumbnail}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
        <div className="relative text-center px-6">
          <p className="text-xs tracking-widest text-white/60 mb-3 font-medium">BLOG</p>
          <h1 className="text-white font-Yeseva text-2xl md:text-[2rem] leading-relaxed drop-shadow-sm">
            {post.title}
          </h1>
          <p className="text-white/60 font-jakarta text-xs mt-3">{post.readTime} مطالعه</p>
        </div>
      </div>

      {/* Article body */}
      <article className="md:w-3/5 w-full mx-auto px-6 md:px-0 py-16">
        <div className="w-8 h-0.5 bg-cardbg mb-10" />

        <div className="font-jakarta text-base leading-9 text-black space-y-6">
          {paragraphs.map((para, i) => (
            <p key={i} className="text-textmuted">
              {para}
            </p>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-line my-14" />

        {/* CTA */}
        <div className="text-center">
          <p className="font-Yeseva text-xl text-black mb-6">
            اگر این مطلب با شما همراه شد، شاید وقتش باشد یک قدم بیشتر برداریم.
          </p>
          <Link
            href="/contact"
            className="font-jakarta hover:bg-line ease-out duration-200 leading-7 p-3 font-semibold text-sm rounded-sm bg-brown inline-flex justify-center items-center px-10"
          >
            شروع مشاوره
          </Link>
        </div>

        {/* Back link */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="text-sm font-jakarta text-cardbg hover:text-darkBrown transition-colors duration-300"
          >
            ← بازگشت به مقالات
          </Link>
        </div>
      </article>

      {/* Other posts */}
      <div className="bg-sand py-14 px-6">
        <div className="md:w-4/5 mx-auto">
          <p className="text-xs tracking-widest text-cardbg mb-6 font-medium text-center">MORE ARTICLES</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts
              .filter((p) => p.slug !== post.slug)
              .map((other) => (
                <Link
                  key={other.slug}
                  href={`/blog/${other.slug}`}
                  className="group flex gap-4 items-start p-5 bg-white rounded-sm border border-line hover:border-cardbg transition-colors duration-300"
                >
                  <div className="w-16 h-16 flex-shrink-0 rounded-sm relative overflow-hidden">
                    <Image
                      src={other.thumbnail}
                      alt={other.title}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div>
                    <h3 className="font-Yeseva text-base text-black group-hover:text-darkBrown transition-colors duration-300 leading-relaxed">
                      {other.title}
                    </h3>
                    <span className="text-xs text-cardbg font-jakarta">{other.readTime} مطالعه</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
