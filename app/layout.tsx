import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-gray-50 text-gray-900">
        <nav className="bg-white shadow-sm border-b">
          <div className="max-w-4xl mx-auto px-6 py-4 flex gap-6">
            <Link href="/" className="font-bold text-blue-600 hover:text-blue-800">Главная</Link>
            <Link href="/about" className="hover:text-blue-600">Обо мне</Link>
            <Link href="/blog" className="hover:text-blue-600">Блог</Link>
          </div>
        </nav>
        <main className="max-w-4xl mx-auto px-6 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}