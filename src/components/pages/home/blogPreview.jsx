import Link from "next/link";
import Image from "next/image";
import {getAllPosts} from "@/lib/blog";

function BlogCard({post}) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="h-full flex flex-col overflow-hidden rounded-sm border border-line hover:border-cardbg transition-colors duration-300">
        <div className="h-44 relative overflow-hidden">
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
          <div className="absolute bottom-3 right-4">
            <span className="text-xs text-white/80 font-jakarta bg-black/20 px-2 py-0.5 rounded-sm backdrop-blur-sm">
              {post.readTime} مطالعه
            </span>
          </div>
        </div>

        <div className="flex flex-col flex-1 p-5 bg-white">
          <div className="w-5 h-0.5 bg-cardbg mb-3" />
          <h3 className="font-Yeseva text-base leading-relaxed text-black mb-2 group-hover:text-darkBrown transition-colors duration-300">
            {post.title}
          </h3>
          <p className="font-jakarta text-xs leading-6 text-textmuted flex-1">
            {post.author} • {post.created_at}
          </p>
          <span className="mt-4 text-xs font-bold text-cardbg font-jakarta group-hover:text-darkBrown transition-colors duration-300">
            ادامه مطلب ←
          </span>
        </div>
      </article>
    </Link>
  );
}

export default async function BlogPreview() {
  const posts = await getAllPosts(3);

  return (
    <section className="text-black">
      <div className="text-center mb-10">
        <p className="text-xs tracking-widest text-cardbg mb-3 font-medium">
          BLOG
        </p>
        <h2 className="font-Yeseva font-normal leading-9 text-[2rem]">
          مقالات
        </h2>
      </div>

      <div className="md:w-4/5 w-full mx-auto px-6 md:px-0">
        {posts.length === 0 ? (
          <p className="text-center text-textmuted font-jakarta">
            در حال حاضر مقاله‌ای منتشر نشده است.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="font-jakarta hover:bg-line ease-out duration-200 leading-7 p-2 font-semibold text-sm rounded-sm bg-brown inline-flex justify-center items-center px-10"
          >
            مشاهده همه مقالات
          </Link>
        </div>
      </div>
    </section>
  );
}
