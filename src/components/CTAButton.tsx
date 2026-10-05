import { Icon } from './Icon';
import {
  PrimaryAnchor,
  PrimaryButton,
  PrimaryLink,
  type BaseActionProps,
} from './buttonStyles';

// Компонент приймає спільні властивості CTA та повертає Router-посилання, зовнішній anchor або button.
// Пріоритет вибору — to, потім href; без обох значень рендериться кнопка з переданим type.
export const CTAButton = ({
  children,
  to,
  href,
  type = 'button',
  fullWidth,
  ariaLabel,
  target,
  rel,
  onClick,
}: BaseActionProps) => {
  // Внутрішня навігація не перезавантажує SPA та має найвищий пріоритет.
  if (to) {
    return (
      <PrimaryLink to={to} $fullWidth={fullWidth} aria-label={ariaLabel} onClick={onClick}>
        {children}
        <Icon name="arrow" size={18} />
      </PrimaryLink>
    );
  }

  // Звичайний anchor зберігає target/rel для телефонних, поштових або зовнішніх адрес.
  if (href) {
    return (
      <PrimaryAnchor
        href={href}
        $fullWidth={fullWidth}
        aria-label={ariaLabel}
        target={target}
        rel={rel}
        onClick={onClick}
      >
        {children}
        <Icon name="arrow" size={18} />
      </PrimaryAnchor>
    );
  }

  // Fallback повертає семантичну кнопку; onClick лишається під контролем батьківського компонента.
  return (
    <PrimaryButton type={type} $fullWidth={fullWidth} aria-label={ariaLabel} onClick={onClick}>
      {children}
      <Icon name="arrow" size={18} />
    </PrimaryButton>
  );
};
