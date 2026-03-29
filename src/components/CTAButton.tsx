import { Icon } from './Icon';
import {
  PrimaryAnchor,
  PrimaryButton,
  PrimaryLink,
  type BaseActionProps,
} from './buttonStyles';

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
  if (to) {
    return (
      <PrimaryLink to={to} $fullWidth={fullWidth} aria-label={ariaLabel} onClick={onClick}>
        {children}
        <Icon name="arrow" size={18} />
      </PrimaryLink>
    );
  }

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

  return (
    <PrimaryButton type={type} $fullWidth={fullWidth} aria-label={ariaLabel} onClick={onClick}>
      {children}
      <Icon name="arrow" size={18} />
    </PrimaryButton>
  );
};
