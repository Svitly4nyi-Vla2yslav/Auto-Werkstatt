import { useEffect } from 'react';

/**
 * Приймає title і description та нічого не повертає.
 * Після зміни аргументів записує document.title, знаходить або створює meta[name='description']
 * і оновлює його content. Cleanup відсутній навмисно: останні метадані залишаються після unmount.
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
