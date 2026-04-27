import Link from "next/link";

const posts = [
  {
    slug: "react-hooks",
    title: "Изучаем хуки React",
    date: "2026-04-20",
    desc: "useState, useEffect и другие базовые хуки на практике.",
  },
  {
    slug: "nextjs-intro",
    title: "Знакомство с Next.js",
    date: "2026-04-27",
    desc: "App Router, серверные компоненты и маршрутизация в Next.js 15.",
  },
  {
    slug: "typescript-tips",
    title: "TypeScript советы",
    date: "2026-04-25",
    desc: "Полезные паттерны типизации для React-разработчика.",
  },
];

export default function Blog() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Блог</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition cursor-pointer">
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-semibold hover:text-blue-600">{post.title}</h2>
                <span className="text-sm text-gray-400">{post.date}</span>
              </div>
              <p className="text-gray-600">{post.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}