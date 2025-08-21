# CV Tools

Повний стек додаток для створення CV з фронтенд та бекенд частинами.

## Структура проекту

```
cv-tools/
├── frontend/          # Next.js React додаток
├── backend/           # Node.js Express API
├── package.json       # Кореневі скрипти для управління
└── README.md         # Цей файл
```

## Швидкий старт

### Установка всіх залежностей
```bash
npm run install:all
```

### Запуск обох серверів одночасно
```bash
npm run dev
```

### Окремий запуск

#### Фронтенд (Next.js)
```bash
npm run dev:frontend
# або
cd frontend && npm run dev
```

#### Бекенд (Express)
```bash
npm run dev:backend
# або  
cd backend && npm run dev
```

## Доступні скрипти

- `npm run dev` - Запускає фронтенд та бекенд одночасно
- `npm run build` - Збирає обидва проекти
- `npm run start` - Запускає продакшн версії
- `npm run install:all` - Встановлює залежності для всіх проектів
- `npm run lint` - Перевіряє код в обох проектах

## Технології

### Фронтенд
- Next.js 15
- React 18
- TypeScript
- TailwindCSS
- HeroUI Components
- Zustand (стан)

### Бекенд
- Node.js
- Express.js
- CORS
- Dotenv

## Розробка

Кожна частина проекту має свої власні залежності та може розроблятися незалежно.

Дивіться README файли в папках `frontend/` та `backend/` для детальної інформації.
