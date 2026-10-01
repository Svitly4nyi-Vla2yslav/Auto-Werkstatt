import { useEffect } from 'react';

/**
 * Блокує прокрутку сторінки через `body.style.overflow`, коли `isLocked` дорівнює true.
 * Перед зміною запам'ятовує inline-значення та відновлює саме його під час очищення,
 * тому не стирає стиль, установлений іншою частиною застосунку до виклику хука.
 */
export const useLockBodyScroll = (isLocked: boolean) => {
  useEffect(() => {
    if (!isLocked) {
      return undefined;
    }

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = overflow;
    };
  }, [isLocked]);
};
