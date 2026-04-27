const posts: Record<string, { title: string; date: string; content: string }> = {
  "react-hooks": {
    title: "Изучаем хуки React",
    date: "2026-04-20",
    content: `useState позволяет добавить состояние в функциональный компонент. useEffect используется для побочных эффектов: запросов к API, подписок, работы с DOM. Хуки делают код чище и позволяют переиспользовать логику через кастомные хуки.`,
  },
  "nextjs-intro": {
    title: "Знакомство с Next.js",
    date: "2026-04-27",
    content: `Next.js 15 использует App Router — новую систему маршрутизации на основе файловой структуры. Серверные компоненты рендерятся на сервере и не увеличивают размер JS-бандла. Динамические маршруты создаются через папки вида [slug].`,
  },
  "typescript-tips": {
    title: "TypeScript советы",
    date: "2026-04-25",
    content: `Используй interface для описания объектов и type для union-типов. Generics позволяют писать универсальные функции с сохранением типов. TypeScript помогает ловить ошибки на этапе компиляции, до запуска кода.`,
  },
};

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) return <div className="text-center py-16 text-gray-500">Статья не найдена</div>;

  return (
    <article className="max-w-2xl">
      <p className="text-sm text-gray-400 mb-2">{post.date}</p>
      <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <p className="text-gray-700 leading-relaxed">{post.content}</p>
      </div>
      <a href="/blog" className="inline-block mt-6 text-blue-600 hover:underline">← Назад к блогу</a>
    </article>
  );
}