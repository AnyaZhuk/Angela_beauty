# Angela Beauty

Сайт салона красоты **Angela** — React + Vite + Tailwind CSS.

## Стек

- React 19, React Router 7
- Vite 7, Tailwind CSS 3
- Zustand (состояние), i18next (ru/en)
- Vitest

## Структура

```
src/
├── api/
│   ├── data/     # Локальные JSON-данные
│   └── salon.js  # Функции загрузки данных
├── app/          # App, маршруты
├── components/   # UI-компоненты
├── hooks/        # React-хуки
├── i18n/         # Переводы
├── layout/       # Шаблоны страниц
├── pages/        # Страницы сайта
└── stores/       # Zustand-сторы
```

## Страницы

- `/` — главная
- `/services` — услуги
- `/masters` — мастера
- `/booking` — онлайн-запись
- `/pricing` — цены и комплексы
- `/contact` — контакты

## Запуск

```bash
npm install
npm run dev
npm run build
npm test
```

Данные берутся из `src/api/data/*.json` — сервер не нужен.
