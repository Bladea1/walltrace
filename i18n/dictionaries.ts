import 'server-only';
import type { Locale } from './config';

const dictionaries = {
  ru: {
    meta: {
      title: 'WALLTRACE',
      description: 'Цифровой архив граффити и социальная платформа.',
    },
    nav: {
      home: 'Главная',
      archive: 'Архив',
      artists: 'Художники',
      history: 'История',
      news: 'Новости',
      events: 'События',
      profile: 'Профиль',
      submit: 'Добавить работу',
      login: 'Войти',
      register: 'Регистрация',
      admin: 'Админ',
    },
    common: {
      readMore: 'Подробнее',
      learnMore: 'Узнать больше',
      viewAll: 'Смотреть всё',
      explore: 'Открыть архив',
      join: 'Создать профиль',
      language: 'Язык',
      liveMode: 'Режим Supabase',
      demoMode: 'Демо-режим',
      save: 'Сохранить',
      cancel: 'Отмена',
      back: 'Назад',
    },
    system: {
      supabaseMissingTitle: 'Supabase пока не подключён',
      supabaseMissingText:
        'Проект работает в демо-режиме. Публичные страницы уже доступны, а формы авторизации и отправки работ начнут работать после добавления ключей в .env.local и выполнения SQL из папки supabase.',
      needLoginTitle: 'Нужно войти в аккаунт',
      needLoginText: 'Эта часть платформы доступна только после входа в учётную запись.',
      adminOnlyTitle: 'Раздел только для администратора',
      adminOnlyText: 'После регистрации выдай своей почте роль admin в Supabase, и эта панель откроется.',
      emptyState: 'Пока здесь пусто. После подключения базы данных здесь появится реальный контент.',
    },
    home: {
      eyebrow: 'Цифровой архив граффити-культуры',
      title: 'WALLTRACE',
      subtitle: 'Серьёзная платформа, где арт-архив, культурное медиа и сообщество работают вместе.',
      description:
        'WALLTRACE объединяет каталог работ, профили художников, интерактивную историю граффити, новости, события и модерируемую пользовательскую публикацию.',
      cards: [
        {
          title: 'Архив работ',
          text: 'Кураторский каталог граффити с авторством, контекстом, метаданными и выставочной подачей.',
        },
        {
          title: 'Художники',
          text: 'Профили авторов, стиль, активность и связь между признанными художниками и новичками.',
        },
        {
          title: 'История граффити',
          text: 'Интерактивная хроника развития граффити — от раннего tagging до фестивалей и цифровых архивов.',
        }
      ],
      ctaPrimary: 'Открыть архив',
      ctaSecondary: 'Создать профиль',
      sections: {
        featured: 'Избранные работы',
        artists: 'Художники',
        timeline: 'История внутри продукта',
        updates: 'Новости и события',
      },
    },
    archive: {
      title: 'Архив работ',
      subtitle: 'Каталог граффити-работ с кураторской подачей, фильтрацией и авторскими карточками.',
    },
    artists: {
      title: 'Художники',
      subtitle: 'Каталог авторов, работающих в разных визуальных направлениях уличного искусства.',
    },
    history: {
      title: 'История граффити',
      subtitle: 'Интерактивный маршрут от первых городских надписей до современной арт-сцены.',
    },
    news: {
      title: 'Новости',
      subtitle: 'Редакционные публикации о событиях, выставках, фестивалях и явлениях граффити-культуры.',
    },
    events: {
      title: 'События',
      subtitle: 'Календарь ключевых активностей: фестивали, джемы, встречи, выставки и городские инициативы.',
    },
    profile: {
      title: 'Профиль художника',
      subtitle: 'Личный кабинет пользователя с редактированием профиля, работами и статусами модерации.',
      fields: {
        displayName: 'Имя / никнейм',
        username: 'Username',
        city: 'Город',
        country: 'Страна',
        style: 'Стиль / направление',
        bio: 'О себе',
      },
      actions: {
        save: 'Сохранить профиль',
        logout: 'Выйти',
        admin: 'Открыть админку',
      },
      stats: {
        total: 'Всего работ',
        approved: 'Опубликовано',
        pending: 'На модерации',
      },
      sections: {
        myWorks: 'Мои работы',
        edit: 'Редактирование профиля',
      },
    },
    auth: {
      loginTitle: 'Вход в WALLTRACE',
      registerTitle: 'Регистрация',
      loginHint: 'После входа откроется профиль, отправка работ и их статусы модерации.',
      registerHint: 'После регистрации создаётся профиль, а почту можно подтвердить через Supabase callback.',
      email: 'Email',
      password: 'Пароль',
      name: 'Имя / никнейм',
      buttonLogin: 'Войти',
      buttonRegister: 'Создать аккаунт',
      goToRegister: 'Нет аккаунта? Зарегистрироваться',
      goToLogin: 'Уже есть аккаунт? Войти',
    },
    submit: {
      title: 'Добавить работу',
      subtitle: 'Пользователь отправляет работу на проверку, администратор решает вопрос публикации.',
      fields: {
        title: 'Название работы',
        author: 'Автор',
        location: 'Место создания',
        year: 'Год',
        style: 'Стиль',
        tags: 'Теги через запятую',
        description: 'Описание',
        image: 'Изображение',
      },
      note: 'Работа сохраняется со статусом pending и не попадает в публичный архив до решения администратора.',
      button: 'Отправить на модерацию',
    },
    admin: {
      title: 'Панель модерации',
      subtitle: 'Базовая админская зона: список pending-работ и действия approve / reject.',
      table: {
        artwork: 'Работа',
        author: 'Автор',
        created: 'Добавлено',
        status: 'Статус',
        actions: 'Действия',
      },
      actions: {
        approve: 'Одобрить',
        reject: 'Отклонить',
      },
    },
    footer: {
      label: 'Digital Graffiti Archive & Social Platform',
      rights: 'Учебный проект WALLTRACE. Пользовательские права на работы сохраняются за авторами.',
    },
  },
  en: {
    meta: {
      title: 'WALLTRACE',
      description: 'Digital graffiti archive and social platform.',
    },
    nav: {
      home: 'Home',
      archive: 'Archive',
      artists: 'Artists',
      history: 'History',
      news: 'News',
      events: 'Events',
      profile: 'Profile',
      submit: 'Submit artwork',
      login: 'Log in',
      register: 'Register',
      admin: 'Admin',
    },
    common: {
      readMore: 'Read more',
      learnMore: 'Learn more',
      viewAll: 'View all',
      explore: 'Explore archive',
      join: 'Create profile',
      language: 'Language',
      liveMode: 'Supabase mode',
      demoMode: 'Demo mode',
      save: 'Save',
      cancel: 'Cancel',
      back: 'Back',
    },
    system: {
      supabaseMissingTitle: 'Supabase is not connected yet',
      supabaseMissingText:
        'The project is running in demo mode. Public pages are already available, while auth and submissions will start working after you add keys to .env.local and run the SQL files from the supabase folder.',
      needLoginTitle: 'You need to log in',
      needLoginText: 'This part of the platform is only available after authentication.',
      adminOnlyTitle: 'Administrator access only',
      adminOnlyText: 'After registering, assign the role admin to your email in Supabase and this panel will open.',
      emptyState: 'Nothing is here yet. Once the database is connected, real content will appear here.',
    },
    home: {
      eyebrow: 'Digital archive of graffiti culture',
      title: 'WALLTRACE',
      subtitle: 'A serious platform where art archive, cultural media, and community overlap.',
      description:
        'WALLTRACE brings together an artwork catalog, artist profiles, an interactive graffiti history, news, events, and moderated user submissions.',
      cards: [
        {
          title: 'Artwork archive',
          text: 'A curated catalog of graffiti works with context, authorship, metadata, and exhibition-style presentation.',
        },
        {
          title: 'Artists',
          text: 'Profiles, styles, visible activity, and a bridge between established writers and newcomers.',
        },
        {
          title: 'Graffiti history',
          text: 'An interactive timeline following graffiti from early tagging to modern festivals and digital archives.',
        }
      ],
      ctaPrimary: 'Explore archive',
      ctaSecondary: 'Create profile',
      sections: {
        featured: 'Featured works',
        artists: 'Artists',
        timeline: 'History built into the product',
        updates: 'News & events',
      },
    },
    archive: {
      title: 'Archive',
      subtitle: 'A catalog of graffiti works with curated presentation, filtering, and artist-linked records.',
    },
    artists: {
      title: 'Artists',
      subtitle: 'A catalog of authors working across multiple branches of urban visual culture.',
    },
    history: {
      title: 'Graffiti history',
      subtitle: 'An interactive route from the earliest city markings to the contemporary art scene.',
    },
    news: {
      title: 'News',
      subtitle: 'Editorial posts about events, exhibitions, festivals, and movements within graffiti culture.',
    },
    events: {
      title: 'Events',
      subtitle: 'A calendar of key activities: festivals, jams, meetups, exhibitions, and city initiatives.',
    },
    profile: {
      title: 'Artist profile',
      subtitle: 'User dashboard with profile editing, artworks, and moderation statuses.',
      fields: {
        displayName: 'Display name',
        username: 'Username',
        city: 'City',
        country: 'Country',
        style: 'Style / discipline',
        bio: 'About',
      },
      actions: {
        save: 'Save profile',
        logout: 'Log out',
        admin: 'Open admin panel',
      },
      stats: {
        total: 'Total works',
        approved: 'Published',
        pending: 'Pending',
      },
      sections: {
        myWorks: 'My artworks',
        edit: 'Edit profile',
      },
    },
    auth: {
      loginTitle: 'Log in to WALLTRACE',
      registerTitle: 'Create account',
      loginHint: 'After logging in, you will unlock the profile, artwork submissions, and moderation statuses.',
      registerHint: 'After registration, a profile is created and email confirmation can go through the Supabase callback.',
      email: 'Email',
      password: 'Password',
      name: 'Name / nickname',
      buttonLogin: 'Log in',
      buttonRegister: 'Create account',
      goToRegister: 'No account yet? Register',
      goToLogin: 'Already have an account? Log in',
    },
    submit: {
      title: 'Submit artwork',
      subtitle: 'Users submit work for review, while administrators decide whether it goes public.',
      fields: {
        title: 'Artwork title',
        author: 'Author',
        location: 'Location',
        year: 'Year',
        style: 'Style',
        tags: 'Tags separated by comma',
        description: 'Description',
        image: 'Image',
      },
      note: 'The artwork is stored with pending status and does not appear in the public archive until an administrator approves it.',
      button: 'Send for moderation',
    },
    admin: {
      title: 'Moderation panel',
      subtitle: 'Basic admin zone: pending artworks and approve / reject actions.',
      table: {
        artwork: 'Artwork',
        author: 'Author',
        created: 'Created',
        status: 'Status',
        actions: 'Actions',
      },
      actions: {
        approve: 'Approve',
        reject: 'Reject',
      },
    },
    footer: {
      label: 'Digital Graffiti Archive & Social Platform',
      rights: 'WALLTRACE academic project. User rights to artworks remain with their authors.',
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)['ru'];

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale] ?? dictionaries.ru;
}
