<div align="center">

# 🗂️ Portfolio Site

**Многостраничный сайт-портфолио на Next.js 15 с блогом, App Router и SSG**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-deployed-black?logo=vercel&logoColor=white)](https://portfolio-site-kappa-three-68.vercel.app/)

[🌐 Открыть сайт](https://portfolio-site-kappa-three-68.vercel.app/) · [📄 Отчёт по ЛР](./report_lab0102.md)

</div>

---

## 📸 Скриншоты

| Главная | Обо мне | Блог | Статья |
|---|---|---|---|
| ![Главная](%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-27%20224929.png) | ![Обо%20мне](%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-27%20224935.png) | ![Блог](%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-27%20224940.png) | ![Статья](%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-04-27%20224944.png) |

---

## 🚀 Стек

| Технология | Версия | Назначение |
|---|---|---|
| **Next.js** | 15 | Фреймворк, App Router, SSG |
| **TypeScript** | 5 | Типизация компонентов и данных |
| **Tailwind CSS** | 4 | Утилитарная стилизация |
| **Vercel** | — | Хостинг и автодеплой |

---

## 📁 Структура проекта

```
portfolio-site/
├── app/
│   ├── layout.tsx          # Общий макет + навигация
│   ├── page.tsx            # Главная страница (Hero + Проекты)
│   ├── about/
│   │   └── page.tsx        # Страница «Обо мне»
│   └── blog/
│       ├── page.tsx        # Список статей
│       ├── data.ts         # Данные статей (BlogPost[])
│       └── [slug]/
│           └── page.tsx    # Динамические страницы статей (SSG)
├── public/
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## ⚡ Ключевые особенности

- **App Router** — маршрутизация через структуру папок `app/`
- **Static Site Generation (SSG)** — все страницы генерируются при сборке
- **`generateStaticParams()`** — статическая генерация динамических маршрутов `/blog/[slug]`
- **TypeScript** — полная типизация, интерфейс `BlogPost`
- **Кастомная 404-страница** — через `not-found.tsx`

---

## 🛠️ Локальный запуск

```bash
# 1. Клонировать репозиторий
git clone https://github.com/akkariq/portfolio-site.git
cd portfolio-site

# 2. Установить зависимости
npm install

# 3. Запустить в режиме разработки
npm run dev
# Открыть: http://localhost:3000

# Или собрать продакшн-версию
npm run build && npm run start
```

---

## 📄 Лабораторная работа

Репозиторий создан в рамках **Лабораторной работы №1.2** по дисциплине **«Технологии программирования»**.

- **Студент:** Иванников Сергей Сергеевич
- **Группа:** ПИН-б-о-24-1(2)
- **Дата:** 27.04.2026
- **Отчёт:** [report_lab0102.md](./report_lab0102.md)

---

<div align="center">

Сделано с помощью [Next.js](https://nextjs.org/) и задеплоено на [Vercel](https://vercel.com/)

</div>
