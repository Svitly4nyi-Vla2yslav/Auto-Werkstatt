import { useEffect } from 'react';

/**
 * Оновлює заголовок документа та вміст meta description після зміни аргументів.
 * Якщо потрібного meta-тега ще немає, створює його й додає до `document.head`;
 * хук нічого не повертає та навмисно залишає останні метадані після unmount.
 */
export const useDocumentMeta = (title: string, description: string) => {
  useEffect(() => {
    document.title = title;

    let metaDescription = document.querySelector('meta[name="description"]');

    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute('content', description);
  }, [description, title]);
};
