import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Стежить лише за `pathname` React Router і після переходу на інший шлях негайно повертає сторінку нагору.
 * Зміни query-параметрів або hash на тому самому шляху повторно ефект не запускають.
 * Компонент не приймає аргументів і не рендерить розмітку; єдиний побічний ефект —
 * `window.scrollTo` з `behavior: 'auto'`, тому анімація та асинхронне очищення не потрібні.
 */
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
};
