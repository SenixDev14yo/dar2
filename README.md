# Darital - Корпоративный сайт

Крупный корпоративный сайт компании с полным функционалом.

## Технологии

- **Frontend:** React.js
- **Backend:** Node.js + Express
- **База данных:** MongoDB

## Установка

1. Установите Node.js и MongoDB
2. Клонируйте репозиторий
3. Установите зависимости:
   ```bash
   npm install
   cd client && npm install
   ```

## Запуск

Для разработки ( 동시에 frontend и backend):
```bash
npm run dev
```

Отдельно backend:
```bash
npm run server
```

Отдельно frontend:
```bash
npm run client
```

## Структура проекта

```
├── client/          # React приложение
│   ├── src/
│   │   ├── components/  # Компоненты
│   │   ├── pages/      # Страницы
│   │   ├── context/    # Контексты
│   │   └── styles/    # Стили
│   └── public/
├── server/         # Express сервер
│   ├── models/     # Mongoose модели
│   ├── routes/     # API маршруты
│   └── middleware/  # Промежуточное ПО
└── .env            # Переменные окружения
```

## Страницы

- Главная
- О компании
- Каталог товаров
- Карточка товара
- Новости
- Контакты
- Партнёрам
- Вакансии
- FAQ
- Отзывы
- 404

## Админ-панель

Доступна по адресу `/admin`

Для первого входа необходимо создать пользователя через базу данных.

## API Endpoints

- `GET /api/products` - Список товаров
- `GET /api/products/:id` - Товар
- `POST /api/products` - Создать товар (admin)
- `PUT /api/products/:id` - Обновить товар (admin)
- `DELETE /api/products/:id` - Удалить товар (admin)

Аналогично для категорий, новостей, вакансий, партнёров, FAQ, отзывов, контактов.

## Лицензия

MIT
