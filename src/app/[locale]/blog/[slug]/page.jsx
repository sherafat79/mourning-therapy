import Link from "next/link";
import Image from "next/image";
import {getAllPosts, getPostBySlug} from "@/lib/blog";
import {redirect} from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {getDictionary} from "@/i18n/dictionaries";
import {locales, localePath} from "@/i18n/config";
import {pageAlternates} from "@/i18n/metadata";

export async function generateStaticParams() {
  const perLocale = await Promise.all(
    locales.map(async (locale) => {
      const posts = await getAllPosts(undefined, locale);
      return posts.map((p) => ({locale, slug: p.slug}));
    }),
  );
  return perLocale.flat();
}

export async function generateMetadata({params}) {
  const {locale, slug} = await params;
  const post = await getPostBySlug(slug, locale);
  if (!post) return {};
  return {
    title: post.title,
    description: post.body?.substring(0, 160) || "",
    alternates: pageAlternates(locale, `/blog/${slug}`),
  };
}

export default async function BlogPostPage({params}) {
  const {locale, slug} = await params;
  const t = getDictionary(locale).blog;
  const [post, allPosts] = await Promise.all([
    getPostBySlug(slug, locale),
    getAllPosts(6, locale),
  ]);
  // A post without an English translation has no English page: send readers to the article list.
  if (!post) redirect(localePath(locale, "/blog"));

  const otherPosts = allPosts.filter((p) => p.slug !== slug);

  return (
    <div className="w-full flex flex-col">
      <div className="h-72 w-full relative overflow-hidden flex justify-center items-end pb-10">
        {post.thumbnail ? (
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-brown to-cardbg" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
        <div className="relative text-center px-6">
          <p className="text-xs tracking-widest text-white/60 mb-3 font-medium">
            {t.eyebrow}
          </p>
          <h1 className="text-white font-Yeseva text-2xl md:text-[2rem] leading-relaxed drop-shadow-sm">
            {post.title}
          </h1>
          <p className="text-white/60 font-jakarta text-xs mt-3">
            {post.readTime} {t.readSuffix}
          </p>
        </div>
      </div>

      <article className="md:w-3/5 w-full mx-auto px-6 md:px-0 py-16">
        <div className="w-8 h-0.5 bg-cardbg mb-10" />

        <div className="font-jakarta text-base leading-9 text-textmuted [&_p]:mb-4">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({children}) => (
                <h1 className="text-2xl font-bold text-black mb-4">
                  {children}
                </h1>
              ),
              h2: ({children}) => (
                <h2 className="text-xl font-bold text-black mb-3">
                  {children}
                </h2>
              ),
              h3: ({children}) => (
                <h3 className="text-lg font-bold text-black mb-2">
                  {children}
                </h3>
              ),
              p: ({children}) => <p className="leading-8 mb-4">{children}</p>,
              a: ({children, href}) => (
                <a
                  href={href}
                  className="text-darkBrown underline hover:text-brown transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
              ul: ({children}) => (
                <ul className="list-disc ps-5 space-y-2 mb-4">{children}</ul>
              ),
              ol: ({children}) => (
                <ol className="list-decimal ps-5 space-y-2 mb-4">{children}</ol>
              ),
              li: ({children}) => <li className="leading-8">{children}</li>,
              blockquote: ({children}) => (
                <blockquote className="border-s-4 border-darkBrown ps-4 ms-0 my-6 text-darkBrown italic">
                  {children}
                </blockquote>
              ),
              img: ({src, alt}) => (
                <img src={src} alt={alt} className="rounded-lg my-6 w-full" />
              ),
              code: ({children}) => (
                <code className="bg-brown/30 px-2 py-0.5 rounded-sm text-sm">
                  {children}
                </code>
              ),
              pre: ({children}) => (
                <pre className="bg-brown/20 p-4 rounded-lg overflow-x-auto mb-4">
                  {children}
                </pre>
              ),
              hr: () => <hr className="border-line my-8" />,
            }}
          >
            {post.body}
          </ReactMarkdown>
        </div>

        <div className="w-full h-px bg-line my-14" />

        <div className="text-center">
          <p className="font-Yeseva text-xl text-black mb-6">
            {t.ctaText}
          </p>
          <Link
            href={localePath(locale, "/contact")}
            className="font-jakarta hover:bg-line ease-out duration-200 leading-7 p-3 font-semibold text-sm rounded-sm bg-brown inline-flex justify-center items-center px-10"
          >
            {t.ctaButton}
          </Link>
        </div>

        <div className="mt-12 text-center">
          <Link
            href={localePath(locale, "/blog")}
            className="text-sm font-jakarta text-cardbg hover:text-darkBrown transition-colors duration-300"
          >
            {t.back}
          </Link>
        </div>
      </article>

      <div className="bg-sand py-14 px-6">
        <div className="md:w-4/5 mx-auto">
          <p className="text-xs tracking-widest text-cardbg mb-6 font-medium text-center">
            {t.moreEyebrow}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherPosts.length === 0 ? (
              <p className="text-center text-textmuted font-jakarta col-span-full">
                {t.noOthers}
              </p>
            ) : (
              otherPosts.map((other) => (
                <Link
                  key={other.slug}
                  href={localePath(locale, `/blog/${other.slug}`)}
                  className="group flex gap-4 items-start p-5 bg-white rounded-sm border border-line hover:border-cardbg transition-colors duration-300"
                >
                  <div className="w-16 h-16 flex-shrink-0 rounded-sm relative overflow-hidden">
                    {other.thumbnail ? (
                      <Image
                        src={other.thumbnail}
                        alt={other.title}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-brown to-cardbg" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-Yeseva text-base text-black group-hover:text-darkBrown transition-colors duration-300 leading-relaxed">
                      {other.title}
                    </h3>
                    <span className="text-xs text-cardbg font-jakarta">
                      {other.readTime} {t.readSuffix}
                    </span>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
