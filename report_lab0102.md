# Отчет по лабораторной работе №1. Часть 2
# Знакомство с Next.js. Создание сайта-портфолио

**Дата:** 27.04.2026

**Семестр:** 2 курс 2 полугодие (4 семестр)

**Группа:** ПИН-б-о-24-1(2)

**Дисциплина:** Технологии программирования

**Студент:** Иванников Сергей Сергеевич

---

## Цель работы

Практическое знакомство с Next.js — мета-фреймворком для React. Освоение концепций серверного рендеринга (SSG), файловой маршрутизации App Router и деплоя. Разработка многостраничного сайта-портфолио с блогом, страницей «Обо мне», динамическими маршрутами и публикацией на платформе Vercel.

---

## Теоретическая часть

### Изученные концепции

#### 1. **Next.js и App Router**
- **App Router** — новый подход к маршрутизации в Next.js 13+, основанный на структуре папок внутри директории `app/`.
- Каждый файл `page.tsx` внутри папки становится отдельным маршрутом.
- `layout.tsx` — общий макет для всех дочерних страниц (шапка, подвал, навигация).

#### 2. **Static Site Generation (SSG)**
- Страницы генерируются **на этапе сборки** (`npm run build`), а не при каждом запросе.
- Для динамических маршрутов используется функция `generateStaticParams()`, которая заранее задаёт все возможные значения параметров.
- Результат — статические HTML-файлы, которые отдаются мгновенно.

#### 3. **Файловая маршрутизация**
- Папка `app/about/` → маршрут `/about`.
- Папка `app/blog/` → маршрут `/blog`.
- Папка `app/blog/[slug]/` → динамический маршрут `/blog/:slug`.
- Специальный файл `not-found.tsx` — кастомная страница 404.

#### 4. **TypeScript в Next.js**
- Типизация пропсов страниц (параметры маршрута `params`).
- Интерфейсы для данных (например, `BlogPost`).
- Полная интеграция с автодополнением VS Code.

#### 5. **Tailwind CSS**
- Утилитарный CSS-фреймворк; классы применяются прямо в JSX.
- Тёмная тема реализуется через классы `bg-gray-900`, `text-white` и т.д.
- Адаптивная вёрстка через префиксы `md:`, `lg:`.

#### 6. **Деплой на Vercel**
- Vercel — официальная платформа для деплоя Next.js приложений.
- Интеграция с GitHub: автодеплой при каждом `git push`.
- Бесплатный хостинг для хобби-проектов (Hobby plan).

---

## Практическая часть

### Выполненные задачи

- [x] **Задача 1: Создание проекта**
  - Создан проект командой `npx create-next-app@latest portfolio-site --typescript --tailwind --app`
  - Установлены зависимости: `npm install`
  - Проверена структура проекта командой `tree -L 2`

- [x] **Задача 2: Настройка `layout.tsx` и главной страницы**
  - Реализован общий макет с навигацией (Главная / Обо мне / Блог)
  - Тёмная тема оформления
  - Главная страница содержит hero-секцию и карточки проектов

- [x] **Задача A: Страница «Обо мне»** (обязательно)
  - Создан файл `app/about/page.tsx`
  - Добавлены навыки: React, TypeScript, Next.js, Tailwind CSS, Git
  - Добавлен раздел с опытом и образованием

- [x] **Задача B: Страница «Блог» со статической генерацией** (обязательно)
  - Создан файл `app/blog/data.ts` с интерфейсом `BlogPost` и массивом из 3 статей
  - Создан файл `app/blog/page.tsx` с отображением списка статей
  - Каждая карточка ссылается на динамическую страницу статьи

- [x] **Задача C: Динамические страницы статей** (обязательно)
  - Создан маршрут `app/blog/[slug]/page.tsx`
  - Реализована функция `generateStaticParams()` для SSG
  - Реализована обработка несуществующих статей через `notFound()`

- [x] **Деплой на Vercel** (дополнительно)
  - Репозиторий `akkariq/portfolio-site` подключён к Vercel через GitHub
  - Приложение задеплоено и доступно по живой ссылке

### Структура проекта

```
portfolio-site/
├── app/
│   ├── layout.tsx          # Общий макет + навигация
│   ├── page.tsx            # Главная страница
│   ├── about/
│   │   └── page.tsx        # Страница «Обо мне»
│   ├── blog/
│   │   ├── page.tsx        # Список статей
│   │   ├── data.ts         # Данные статей
│   │   └── [slug]/
│   │       └── page.tsx    # Динамическая страница статьи
├── public/
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

### Ключевые фрагменты кода

#### 1. Интерфейс и данные блога (`app/blog/data.ts`)
```typescript
export interface BlogPost {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  date: string
  author: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Введение в Next.js',
    slug: 'introduction-to-nextjs',
    excerpt: 'Основы Next.js и преимущества серверного рендеринга',
    content: 'Next.js — это мета-фреймворк для React...',
    date: '2026-01-15',
    author: 'Иванников С.С.'
  },
  {
    id: 2,
    title: 'TypeScript в React-проектах',
    slug: 'typescript-in-react',
    excerpt: 'Как статическая типизация улучшает качество кода',
    content: 'TypeScript добавляет статическую типизацию...',
    date: '2026-02-10',
    author: 'Иванников С.С.'
  },
  {
    id: 3,
    title: 'Tailwind CSS: утилитарный подход',
    slug: 'tailwind-css-guide',
    excerpt: 'Быстрая стилизация без написания собственного CSS',
    content: 'Tailwind CSS — утилитарный фреймворк...',
    date: '2026-03-05',
    author: 'Иванников С.С.'
  }
]
```

#### 2. Динамический маршрут с SSG (`app/blog/[slug]/page.tsx`)
```tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { blogPosts } from '../data'

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = blogPosts.find(p => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <div className="flex justify-between text-gray-400">
          <span>{post.date}</span>
          <span>Автор: {post.author}</span>
        </div>
      </header>

      <div className="prose max-w-none">
        <p className="text-lg mb-4 text-gray-300">{post.excerpt}</p>
        <p className="text-gray-400">{post.content}</p>
      </div>

      <div className="mt-8 pt-4 border-t border-gray-700">
        <Link href="/blog" className="text-blue-400 hover:text-blue-300">
          ← Вернуться к списку статей
        </Link>
      </div>
    </article>
  )
}
```

#### 3. Главная страница с hero-секцией (`app/page.tsx`)
```tsx
import Link from 'next/link'

const projects = [
  {
    title: 'Todo App',
    description: 'React + TypeScript + Vite + Tailwind',
    tag: 'React',
  },
  {
    title: 'Portfolio',
    description: 'Next.js + TypeScript + Tailwind',
    tag: 'Next.js',
  },
]

export default function HomePage() {
  return (
    <div>
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">
          Привет, я Frontend-разработчик 👋
        </h1>
        <p className="text-gray-400 mb-8">
          Создаю современные веб-приложения с помощью React и Next.js
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/about"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Обо мне
          </Link>
          <Link
            href="/blog"
            className="border border-gray-600 px-6 py-3 rounded-lg hover:bg-gray-800"
          >
            Мой блог
          </Link>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Мои проекты</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="border border-gray-700 rounded-lg p-6">
              <h3 className="text-gray-400 text-sm mb-2">{project.title}</h3>
              <p className="text-white mb-4">{project.description}</p>
              <span className="bg-blue-900 text-blue-300 text-xs px-2 py-1 rounded">
                {project.tag}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
```

#### 4. Страница «Обо мне» (`app/about/page.tsx`)
```tsx
export default function AboutPage() {
  const skills = ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Git / GitHub']

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Обо мне</h1>

      <div className="bg-gray-800 p-6 rounded-lg mb-6">
        <h2 className="text-xl font-semibold mb-3">Навыки</h2>
        <ul className="list-disc pl-5 space-y-1 text-gray-300">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">Образование</h2>
        <div className="space-y-4 text-gray-300">
          <div>
            <p className="font-medium">Прикладная информатика</p>
            <p className="text-sm text-gray-400">2024 – настоящее время · 2 курс</p>
          </div>
          <div>
            <p className="font-medium">Веб-разработка (самостоятельно)</p>
            <p className="text-sm text-gray-400">React, Next.js, TypeScript, Tailwind CSS</p>
          </div>
        </div>
      </div>
    </div>
  )
}
```

---

## Результаты выполнения

### Скриншоты работы приложения

**Главная страница (Hero + Проекты)**

![Главная страница](screenshots/home.png)
*Hero-секция с приветствием, кнопками навигации и карточками проектов.*

**Страница «Обо мне»**

![Обо мне](screenshots/about.png)
*Список из 5 навыков и раздел с образованием.*

**Список статей блога**

![Блог](screenshots/blog.png)
*Три статьи с заголовком, аннотацией, датой и автором.*

**Страница отдельной статьи**

![Статья](screenshots/blog-post.png)
*Динамически сгенерированная страница статьи с навигацией «назад».*

**Деплой на Vercel**

![Vercel Congratulations](screenshots/vercel-deploy.png)
*Успешный деплой проекта на платформу Vercel.*

**Живой сайт на Vercel**

![Живой сайт](screenshots/vercel-live.png)
*Главная страница сайта по адресу: https://portfolio-site-kappa-three-68.vercel.app/*

### Результат сборки проекта

```
$ npm run build

> portfolio-site@0.1.0 build
> next build

✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (7/7)
✓ Collecting build traces
✓ Finalizing page optimization

Route (app)                              Size     First Load JS
┌ ○ /                                   2.5 kB   85.2 kB
├ ○ /about                              1.2 kB   84.0 kB
├ ○ /blog                               1.8 kB   84.5 kB
└ ● /blog/[slug]                        1.4 kB   84.2 kB
    ├ /blog/introduction-to-nextjs
    ├ /blog/typescript-in-react
    └ /blog/tailwind-css-guide
```

### Метрики проекта

| Метрика | Значение |
|---------|----------|
| **Количество страниц** | 5 (/, /about, /blog, /blog/[slug] ×3) |
| **Покрытие типами TypeScript** | 100% |
| **Тип рендеринга** | SSG (Static Site Generation) |
| **Динамические маршруты** | `/blog/[slug]` |
| **Деплой** | Vercel (https://portfolio-site-kappa-three-68.vercel.app) |
| **Репозиторий** | github.com/akkariq/portfolio-site |

---

## Ответы на контрольные вопросы

### 1. Что такое SSG (Static Site Generation) и как он реализован в вашем проекте?

**Ответ:**
SSG — это метод генерации страниц во время **сборки** (`npm run build`), а не во время запроса пользователя. Сервер заранее создаёт статические HTML-файлы, которые отдаются клиенту мгновенно без вычислений на сервере. В проекте SSG реализован для всех страниц автоматически — Next.js по умолчанию статически генерирует страницы, не использующие динамические данные. Для динамического маршрута `/blog/[slug]` реализована функция `generateStaticParams()`, которая возвращает все возможные значения `slug` из массива `blogPosts`. При сборке Next.js генерирует отдельный HTML-файл для каждого slug.

### 2. Как работает файловая маршрутизация в Next.js?

**Ответ:**
В Next.js (App Router) маршрутизация полностью основана на структуре файловой системы внутри папки `app/`. Каждая папка соответствует сегменту URL, а файл `page.tsx` внутри неё — самой странице. Папка с названием в квадратных скобках (например, `[slug]`) создаёт **динамический маршрут** — переменную часть URL. Специальные файлы: `layout.tsx` — общий макет, `not-found.tsx` — кастомная 404-страница, `loading.tsx` — состояние загрузки. Навигация осуществляется компонентом `<Link>` из `next/link`, обеспечивающим клиентскую навигацию без перезагрузки страницы.

### 3. Какие преимущества даёт использование `generateStaticParams`?

**Ответ:**
Функция `generateStaticParams` позволяет Next.js заранее знать все возможные значения динамических параметров маршрута, чтобы сгенерировать статические HTML-страницы при сборке. Преимущества: **производительность** — страницы отдаются мгновенно, без запросов к серверу или базе данных; **SEO** — поисковые роботы получают полностью готовый HTML; **надёжность** — сайт работает даже если источник данных недоступен. Без `generateStaticParams` динамические маршруты рендерились бы на сервере при каждом запросе (SSR).

### 4. В чём разница между `npm run dev` и `npm run build`?

**Ответ:**
`npm run dev` запускает **режим разработки**: горячая перезагрузка при изменении файлов, подробные сообщения об ошибках, отключённые оптимизации — быстрый старт, но медленная работа приложения. Компиляция происходит «на лету» при каждом запросе. `npm run build` создаёт **продакшн-сборку**: все страницы генерируются статически, JavaScript минифицируется и разбивается на чанки, оптимизируются изображения и шрифты — медленный процесс сборки, но максимально быстрое приложение. После `build` запускается через `npm run start` (локально) или деплоится на хостинг (Vercel).

---

## Выводы

1. **Next.js App Router** значительно упрощает создание многостраничных приложений: файловая структура сама по себе является маршрутизацией, не требуя дополнительной конфигурации.
2. **SSG** обеспечивает отличную производительность и SEO — страницы генерируются при сборке и отдаются клиенту как статические файлы.
3. **`generateStaticParams`** позволяет использовать SSG для динамических маршрутов, заранее определяя все возможные значения параметров.
4. **TypeScript** в связке с Next.js обеспечивает полную типизацию маршрутов, пропсов и данных, что предотвращает ошибки на этапе разработки.
5. **Vercel** — идеальная платформа для Next.js проектов: интеграция с GitHub, автодеплой и бесплатный хостинг позволяют опубликовать сайт за несколько минут.
6. В ходе работы освоен полный цикл: от создания проекта и разработки страниц до деплоя готового приложения в интернет по адресу https://portfolio-site-kappa-three-68.vercel.app/.

---

## Приложения

### Ссылки

- **Живой сайт:** https://portfolio-site-kappa-three-68.vercel.app/
- **GitHub репозиторий:** https://github.com/akkariq/portfolio-site

### Инструкция по запуску локально

```bash
# Клонировать репозиторий
git clone https://github.com/akkariq/portfolio-site.git
cd portfolio-site

# Установить зависимости
npm install

# Запустить в режиме разработки
npm run dev
# Открыть: http://localhost:3000

# Или собрать продакшн-версию
npm run build
npm run start
```
