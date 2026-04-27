export default function Home() {
  return (
    <div>
      <section className="py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Привет, я Frontend-разработчик 👋</h1>
        <p className="text-xl text-gray-600 mb-8">
          Создаю современные веб-приложения с помощью React и Next.js
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/about" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Обо мне
          </a>
          <a href="/blog" className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
            Мой блог
          </a>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Мои проекты</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Todo App", desc: "React + TypeScript + Vite + Tailwind", tech: "React" },
            { title: "Portfolio", desc: "Next.js + TypeScript + Tailwind", tech: "Next.js" },
          ].map((p) => (
            <div key={p.title} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-600 mb-3">{p.desc}</p>
              <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{p.tech}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}