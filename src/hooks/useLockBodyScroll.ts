import { useEffect } from 'react';

/**
 * Приймає прапорець блокування й нічого не повертає.
 * За true зберігає поточний inline body.style.overflow, встановлює hidden і відновлює
 * саме попереднє значення під час cleanup; за false не змінює DOM і не реєструє cleanup.
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
