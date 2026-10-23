import {
  SecondaryAnchor,
  SecondaryButtonElement,
  SecondaryLink,
  type BaseActionProps,
} from './buttonStyles';

/**
 * Уніфікує вторинну дію як Router-посилання, звичайний anchor або HTML-кнопку.
 * `to` має пріоритет над `href`; без обох адрес повертається кнопка з указаним `type`.
 * Компонент лише передає оформлення й callback `onClick`, не змінюючи стан самостійно.
 */
export const SecondaryButton = ({
  children,
  to,
  href,
  type = 'button',
  fullWidth,
  inverse,
  ariaLabel,
  target,
  rel,
  onClick,
}: BaseActionProps) => {
  // Внутрішній маршрут зберігає SPA-навігацію без повного перезавантаження документа.
  if (to) {
    return (
      <SecondaryLink
        to={to}
        $fullWidth={fullWidth}
        $inverse={inverse}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {children}
      </SecondaryLink>
    );
  }

  // Зовнішні, телефонні й поштові адреси отримують передані target та rel.
  if (href) {
    return (
      <SecondaryAnchor
        href={href}
        $fullWidth={fullWidth}
        $inverse={inverse}
        aria-label={ariaLabel}
        target={target}
        rel={rel}
        onClick={onClick}
      >
        {children}
      </SecondaryAnchor>
    );
  }

  return (
    <SecondaryButtonElement
      type={type}
      $fullWidth={fullWidth}
      $inverse={inverse}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </SecondaryButtonElement>
  );
};
