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
    actions: {
      login: 'Войти',
      register: 'Регистрация',
      submit: 'Добавить работу',
      discover: 'Открыть архив',
      join: 'Присоединиться',
      save: 'Сохранить',
      delete: 'Удалить',
      approve: 'Одобрить',
      reject: 'Отклонить',
      upload: 'Загрузить',
      back: 'Назад',
    },
    home: {
      eyebrow: 'Цифровой архив граффити-культуры',
      title: 'WALLTRACE',
      subtitle: 'Где архив встречается с живым художественным сообществом.',
      description:
        'Серьёзная двуязычная платформа о граффити: каталог работ и художников, интерактивная история культуры, события, новости и модерируемая публикация пользовательских материалов.',
      spotlight: {
        label: 'Концепция проекта',
        title: 'Не просто соцсеть, а кураторская платформа.',
        text: 'WALLTRACE объединяет архив, медиа и сообщество вокруг граффити-культуры.',
      },
      timeline: {
        title: 'История, встроенная в продукт',
        text: 'Отдельный раздел оформлен как цифровая музейная экспозиция с эпохами, фигурами и культурными переходами.',
      },
    },
    footer: {
      caption: 'Digital Graffiti Archive & Social Platform',
      rights: 'Учебный проект WALLTRACE. Все права на пользовательский контент сохраняются за авторами.',
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
    actions: {
      login: 'Log in',
      register: 'Register',
      submit: 'Submit artwork',
      discover: 'Explore archive',
      join: 'Join platform',
      save: 'Save',
      delete: 'Delete',
      approve: 'Approve',
      reject: 'Reject',
      upload: 'Upload',
      back: 'Back',
    },
    home: {
      eyebrow: 'Digital graffiti culture archive',
      title: 'WALLTRACE',
      subtitle: 'Where archival structure meets a living art community.',
      description:
        'A serious bilingual platform about graffiti: artwork and artist catalog, interactive cultural history, events, news, and moderated user submissions.',
      spotlight: {
        label: 'Project concept',
        title: 'Not just a social network, but a curated platform.',
        text: 'WALLTRACE combines archive logic, editorial visual language, and a live community layer.',
      },
      timeline: {
        title: 'History built into the product',
        text: 'The history section is designed like a digital museum with eras, influential figures, and cultural transitions.',
      },
    },
    footer: {
      caption: 'Digital Graffiti Archive & Social Platform',
      rights: 'WALLTRACE academic project. User content rights remain with the original authors.',
    },
  },
} as const;

export type Dictionary = Record<string, any>;

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale] ?? dictionaries.ru;
}