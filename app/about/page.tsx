export default function About() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Обо мне</h1>

      <div className="bg-white rounded-lg p-6 shadow-sm border mb-6">
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Привет! Я студент факультета прикладной информатики, изучаю
          современные технологии веб-разработки. Увлекаюсь React, Next.js
          и TypeScript.
        </p>
        <p className="text-gray-700 leading-relaxed">
          В свободное время занимаюсь 3D-моделированием в Blender
          и разработкой pet-проектов.
        </p>
      </div>

      <h2 className="text-xl font-bold mb-4">Навыки</h2>
      <div className="flex flex-wrap gap-2">
        {["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "Git", "Blender"].map((skill) => (
          <span key={skill} className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-medium">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}