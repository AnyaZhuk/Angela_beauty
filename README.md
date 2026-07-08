# Angela Beauty

Сайт салона красоты **Angela** — React + Vite + Tailwind CSS.

## Стек

- React 19, React Router 7
- Vite 7, Tailwind CSS 3
- Zustand (состояние), i18next (ru/en)
- Vitest, Playwright (e2e)

## Структура

```
src/
├── api/          # HTTP-клиент и mock-данные
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
npm run dev:mock   # dev-сервер с mock API
npm run dev        # dev-сервер (live API на :8000)
npm run build
npm test
```

## Переменные окружения

| Переменная | Описание |
|---|---|
| `VITE_USE_MOCK` | `true` — mock API |
| `VITE_API_URL` | URL бэкенда (по умолчанию `/api`) |
| `VITE_DEFAULT_LOCALE` | `ru` или `en` |
