import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Стежить за pathname React Router і після кожної зміни негайно повертає сторінку нагору.
 * Компонент не рендерить розмітку; його побічний ефект — виклик `window.scrollTo`
 * з `behavior: 'auto'`, тому перехід не запускає плавну анімацію.
 */
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
};
