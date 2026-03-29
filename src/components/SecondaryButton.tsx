import {
  SecondaryAnchor,
  SecondaryButtonElement,
  SecondaryLink,
  type BaseActionProps,
} from './buttonStyles';

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
