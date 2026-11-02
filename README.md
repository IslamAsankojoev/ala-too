# Ala-Too Realty — сайт

Next.js 16 (App Router) + Tailwind CSS 4 + react-hook-form + zod.
Сборка — **статический экспорт**: на выходе обычные HTML/CSS/JS, которые можно залить на любой хостинг
(shared-хостинг, nginx/Apache, GitHub Pages, Netlify, S3…). Node.js на сервере не нужен.

## Команды

```bash
npm install
npm run dev     # разработка: http://localhost:3000
npm run build   # статическая сборка в папку out/
npm start       # локальный просмотр out/
```

Для деплоя загрузите **содержимое папки `out/`** в корень сайта (`public_html`, `www` и т. п.).
Ссылки имеют вид `/catalog/` → `out/catalog/index.html`, поэтому никакие rewrite-правила не нужны.
Если сайт открывается не из корня домена (например, `site.kg/realty/`), добавьте `basePath` в `next.config.ts`.

## Заявки

Форма «Подберём недвижимость» проверяется через zod (`src/lib/lead-schema.ts`).
Своего сервера у статического сайта нет, поэтому заявка отправляется POST-запросом (JSON) на адрес
из переменной `NEXT_PUBLIC_LEAD_ENDPOINT`. Подойдут Formspree, Getform, Google Apps Script или свой PHP-скрипт.
Переменную нужно задать **во время сборки**:

```bash
NEXT_PUBLIC_LEAD_ENDPOINT=https://formspree.io/f/xxxx npm run build
```

Если переменная не задана, заявка не отправляется, а только пишется в консоль браузера.

Быстрый поиск на главной отправляет GET-запрос на `/catalog/?mode=…&type=…&district=…&budget=…`.

## Структура

- `src/app/` — layout (шрифты подключаются через next/font и хранятся на самом сайте) и страницы
- `src/components/` — Header, Footer, общие элементы (`ui.tsx`, `FallbackImg`, `RevealOnScroll`)
- `src/components/home/` — секции главной страницы
- `src/data/` — тексты, контакты, навигация, ссылки на фото

## До запуска

- **Фото.** Большинство картинок в `src/data/home.ts` — временные ссылки на CDN сайта-референса
  (whitewill.ru, `cdn.ww.estate`). Это чужие материалы. Их нужно заменить своими фото
  (положить в `public/images/` и указать как `/images/...`). Если картинка не загрузилась, на её месте видна полосатая заглушка.
- **Другие страницы.** Пока сделана только главная. Ссылки ведут на `/catalog/`, `/object/`, `/owners/`,
  `/about/`, `/contacts/`; их макеты есть в проекте Claude Design.
- Ссылки на политику конфиденциальности и соглашение пока стоят как `#`.
- Переключатель языков RU/KG/EN пока ничего не переводит.
