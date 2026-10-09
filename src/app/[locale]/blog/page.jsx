import Link from "next/link";
import Image from "next/image";
import {getAllPosts} from "@/lib/blog";
import {getDictionary} from "@/i18n/dictionaries";
import {localePath} from "@/i18n/config";
import {pageMetadata} from "@/i18n/metadata";

export async function generateMetadata({params}) {
  const {locale} = await params;
  return pageMetadata(locale, "blog", "/blog");
}

function BlogCard({post, locale, t}) {
  return (
    <Link href={localePath(locale, `/blog/${post.slug}`)} className="group block">
      <article className="h-full flex flex-col overflow-hidden rounded-sm border border-line hover:border-cardbg transition-colors duration-300">
        <div className="h-52 relative overflow-hidden">
          {post.thumbnail ? (
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-400 ease-out group-hover:scale-105"
              sizes="(max-width: 998px) 100vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-brown to-cardbg" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-4 start-5">
            <span className="text-xs text-white/80 font-jakarta bg-black/20 px-2 py-0.5 rounded-sm backdrop-blur-sm">
              {post.readTime} {t.readSuffix}
            </span>
          </div>
        </div>

        <div className="flex flex-col flex-1 p-6 bg-white">
          <div className="w-6 h-0.5 bg-cardbg mb-4" />
          <h2 className="font-Yeseva text-lg leading-relaxed text-black mb-3 group-hover:text-darkBrown transition-colors duration-300">
            {post.title}
          </h2>
          <p className="font-jakarta text-xs leading-6 text-textmuted">
            {post.author} • {post.created_at}
          </p>
          <span className="mt-5 text-xs font-bold text-cardbg font-jakarta group-hover:text-darkBrown transition-colors duration-300">
            {t.readMore}
          </span>
        </div>
      </article>
    </Link>
  );
}

export default async function BlogPage({params}) {
  const {locale} = await params;
  const t = getDictionary(locale).blog;
  const posts = await getAllPosts(undefined, locale);

  return (
    <div className="w-full flex flex-col">
      <div className="h-64 w-full relative overflow-hidden flex justify-center items-center">
        <div
          className="absolute inset-0 fabric-wave"
          style={{
            background:
              "linear-gradient(160deg, #e8ddd4 0%, #c9b8ae 50%, #a89890 100%)",
          }}
        >
          <div className="absolute inset-0 fabric-texture" />
          <div
            className="absolute inset-0 opacity-20 silk-drift"
            style={{
              background:
                "radial-gradient(ellipse at 60% 40%, rgba(253,250,247,0.7) 0%, transparent 55%)",
            }}
          />
        </div>
        <div className="relative text-center">
          <p className="text-xs tracking-widest text-textWhite opacity-60 mb-3 font-medium">
            {t.eyebrow}
          </p>
          <h1 className="text-textWhite font-Yeseva text-[2rem]">{t.title}</h1>
        </div>
      </div>

      <div className="md:w-4/5 w-full mx-auto px-6 md:px-0 py-16">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest text-cardbg mb-3 font-medium">
            {t.articlesEyebrow}
          </p>
          <h2 className="font-Yeseva text-3xl text-black">
            {t.articlesTitle}
          </h2>
        </div>
        {posts.length === 0 ? (
          <p className="text-center text-textmuted font-jakarta">
            {t.empty}
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} locale={locale} t={t} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
