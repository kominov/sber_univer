# Интернет-магазин — React-приложение

Финальный проект курса React PRO. Интернет-магазин с каталогом товаров, корзиной, избранным, авторизацией и отзывами.

---

## Что сделано

- **Архитектура по методологии Feature-Sliced Design (FSD)** — код разделён на слои `app`, `pages`, `widgets`, `features`, `entities`, `shared`.
- **Роутинг** — 8 страниц: главная, каталог товаров, карточка товара, корзина, избранное, профиль, вход, регистрация, 404.
- **Авторизация и регистрация** — формы с валидацией через `react-hook-form` + `yup`, JWT-токен сохраняется в Redux.
- **Каталог товаров** — получение с сервера через RTK Query, пагинация (подгрузка по кнопке «Загрузить ещё»), сортировка (цена ↑↓, дата ↑↓), поиск с debounce.
- **Карточка товара** — детальная информация, лайк, добавление в корзину, отзывы с формой отправки.
- **Корзина** — добавление/удаление товаров, изменение количества, отображение общей суммы.
- **Избранное** — фильтрация товаров по лайкам текущего пользователя.
- **Профиль** — просмотр и редактирование данных пользователя.
- **Модальное окно** — переиспользуемый компонент `Modal` с порталом.
- **Мемоизация** — `React.memo`, `useCallback`, `useMemo` для оптимизации перерендеров.
- **Автофокус** — поле email в форме входа получает фокус при монтировании.
- **`useActionState`** — форма отзыва использует новый React-хук.
- **Линтер и форматтер** — ESLint (flat config), Prettier, Stylelint, Husky + lint-staged.
- **Сборка Vite** — миграция с Webpack, TypeScript, CSS Modules.
- **Обработка ошибок** — HOC `WithQuery` для состояний загрузки/ошибки, уведомления через `react-toastify`.
- **Кастомные хуки** — `useAddToCart`, `useDebounce`, `usePagination`, `useActionCreators`, `useProducts`.

---

## Структура папок

```
src/
├── app/                          # Слой приложения
│   ├── App.tsx                   # Корневой компонент (Header, Outlet, Footer, Toast)
│   ├── router/
│   │   └── config/
│   │       ├── index.ts          # Реэкспорт роутера
│   │       └── router.tsx        # Конфигурация маршрутов (createBrowserRouter)
│   └── styles/                   # Глобальные стили (normalize.css, styles.css)
│
├── pages/                        # Страницы приложения
│   ├── CartPage/                 # Корзина
│   ├── FavoritesPage/            # Избранное
│   ├── HomePage/                 # Главная (каталог товаров)
│   ├── NotFoundPage/             # 404
│   ├── ProductPage/              # Детальная карточка товара
│   ├── ProfilePage/              # Профиль пользователя
│   ├── SignInPage/               # Вход
│   └── SignUpPage/               # Регистрация
│
├── widgets/                      # Самостоятельные блоки
│   ├── CardList/                 # Список карточек товаров
│   ├── CartList/                 # Список товаров в корзине
│   ├── Footer/                   # Подвал сайта
│   ├── Header/                   # Шапка сайта (навигация, поиск, корзина)
│   └── ReviewList/               # Список отзывов + форма добавления
│
├── features/                     # Функциональные модули
│   ├── auth/                     # Авторизация (формы, схемы валидации, типы)
│   ├── cartAmount/               # Отображение суммы корзины
│   ├── cartCounter/              # Счётчик количества товара в корзине
│   ├── cartItem/                 # Элемент товара в корзине
│   ├── editProfile/              # Редактирование профиля
│   ├── likeButton/               # Кнопка лайка
│   ├── loadMore/                 # Кнопка «Загрузить ещё»
│   ├── search/                   # Поиск с debounce
│   └── sort/                     # Сортировка товаров
│
├── entities/                     # Бизнес-сущности
│   └── Product/
│       └── ui/Card/              # Карточка товара
│
├── shared/                       # Переиспользуемые модули
│   ├── assets/                   # Иконки и изображения (svg)
│   ├── hooks/                    # Кастомные хуки
│   │   ├── useActionCreators.ts  # Биндинг экшенов
│   │   ├── useAddToCart.ts       # Добавление в корзину
│   │   ├── useDebounce.ts        # Дебаунс
│   │   └── usePagination.ts      # Пагинация
│   ├── store/                    # Redux store
│   │   ├── api/                  # RTK Query (authApi, productsApi, config)
│   │   ├── HOCs/                 # WithQuery (загрузка/ошибка)
│   │   ├── hooks/                # useProducts
│   │   ├── reducers/             # rootReducer
│   │   ├── slices/               # cart, products, user
│   │   ├── store.ts              # Конфигурация store
│   │   ├── types.ts              # RootState, AppDispatch
│   │   └── utils.ts              # useAppDispatch, useAppSelector
│   ├── types/                    # Глобальные TypeScript-типы
│   ├── ui/                       # UI-кит
│   │   ├── Button/               # Кнопка
│   │   ├── ButtonBack/           # Кнопка «Назад»
│   │   ├── DeliveryInfo/         # Информация о доставке
│   │   ├── Input/                # Поле ввода
│   │   ├── Logo/                 # Логотип
│   │   ├── Modal/                # Модальное окно (портальное)
│   │   ├── Price/                # Отображение цены
│   │   ├── ProductSpecs/         # Характеристики товара
│   │   ├── Rating/               # Рейтинг (звёзды)
│   │   └── Spinner/              # Спиннер загрузки
│   └── utils/                    # Утилиты (common, getMessageFromError, isLiked)
│
├── index.tsx                     # Точка входа (Provider + RouterProvider)
└── custom.d.ts                   # Типы для CSS Modules и SVG
```

---

## Технологии

| Категория          | Библиотеки |
|--------------------|------------|
| Фреймворк          | React 19, React DOM 19 |
| Сборка             | Vite 8, TypeScript 6 |
| Роутинг            | React Router DOM 6 |
| Состояние          | Redux Toolkit, RTK Query |
| Формы              | React Hook Form, Yup |
| UI                 | Material UI (MUI), Emotion |
| Уведомления        | React Toastify |
| Линтинг            | ESLint 9 (flat config), Prettier, Stylelint |
| Git hooks          | Husky, lint-staged, Commitizen |
| Другое             | classnames, react-toastify |

---

## Запуск

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка для продакшена
npm run build

# Превью собранного проекта
npm run preview
```

## Метрики сборки (Vite)

Сборка выполняется командой `npm run build` — сначала TypeScript (`tsc`), затем Vite.

**Ключевые метрики:**

| Метрика       | Значение |
|---------------|----------|
| Бандлер       | Vite 8
| Время сборки  | 2.84s
| Размер бандла | 682.90 kB

## Линтинг и форматирование

```bash
# Проверка и автоисправление
npm test

# Только линтинг
npm run lint

# Только форматирование
npm run format

# Только Stylelint
npm run stylelint
```

## Переменные окружения

Создайте файл `.env` в корне проекта:

```
VITE_API_URL=https://your-api-url.com
```
