import styled, { keyframes } from 'styled-components';

import sedanImage from '../assets/image/sportlichem Sedan.png';

const glowShift = keyframes`
  0% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 0.5;
  }
  50% {
    transform: translate3d(14px, -10px, 0) scale(1.03);
    opacity: 0.75;
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1);
    opacity: 0.5;
  }
`;

const sweep = keyframes`
  0% {
    transform: translate3d(-24%, 0, 0) rotate(-16deg);
    opacity: 0;
  }
  16% {
    opacity: 0.12;
  }
  48% {
    opacity: 0.22;
  }
  100% {
    transform: translate3d(124%, 0, 0) rotate(-16deg);
    opacity: 0;
  }
`;

const scan = keyframes`
  0% {
    transform: translateY(0);
    opacity: 0.08;
  }
  50% {
    transform: translateY(18px);
    opacity: 0.22;
  }
  100% {
    transform: translateY(0);
    opacity: 0.08;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(0.98);
    opacity: 0.18;
  }
  50% {
    transform: scale(1);
    opacity: 0.36;
  }
  100% {
    transform: scale(0.98);
    opacity: 0.18;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation: none !important;
      transition: none !important;
    }
  }
`;

const PhotoLayer = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(8, 11, 15, 0.92) 0%, rgba(8, 11, 15, 0.78) 32%, rgba(8, 11, 15, 0.38) 56%, rgba(8, 11, 15, 0.64) 100%),
    linear-gradient(180deg, rgba(8, 11, 15, 0.16), rgba(8, 11, 15, 0.32)),
    url(${sedanImage});
  background-size: cover;
  background-position: center right;
  background-repeat: no-repeat;
  filter: saturate(0.9) brightness(0.64) contrast(1.02);
  transform: scale(1.02);

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    background-position: 72% center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background-position: 76% center;
    filter: saturate(0.84) brightness(0.54) contrast(1.02);
  }
`;

const AmbientGlow = styled.div`
  position: absolute;
  right: -10%;
  top: 6%;
  width: min(52vw, 720px);
  height: min(52vw, 720px);
  border-radius: 50%;
  background:
    radial-gradient(circle, rgba(236, 107, 45, 0.16), rgba(236, 107, 45, 0.05) 40%, transparent 72%);
  filter: blur(24px);
  animation: ${glowShift} 14s ease-in-out infinite;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 86vw;
    height: 86vw;
    right: -34%;
    top: 14%;
  }
`;

const GridOverlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(255, 255, 255, 0.022) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.022) 1px, transparent 1px);
  background-size: 90px 90px;
  mask-image: linear-gradient(90deg, transparent 0%, rgba(0, 0, 0, 0.08) 24%, rgba(0, 0, 0, 0.88) 60%, rgba(0, 0, 0, 1) 100%);
  opacity: 0.45;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background-size: 62px 62px;
    opacity: 0.24;
  }
`;

const ScanLine = styled.div<{ $top: string; $left: string; $width: string; $delay: string }>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  width: ${({ $width }) => $width};
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(236, 107, 45, 0.42), rgba(255, 255, 255, 0.12), transparent);
  animation: ${scan} 5.4s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    opacity: 0.54;
  }
`;

const AccentPoint = styled.span<{ $top: string; $left: string; $delay: string }>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accent};
  box-shadow:
    0 0 0 4px rgba(236, 107, 45, 0.08),
    0 0 14px rgba(236, 107, 45, 0.28);
  animation: ${pulse} 4.8s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay};
`;

const LightStreak = styled.div<{ $top: string; $left: string; $width: string; $delay: string }>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  width: ${({ $width }) => $width};
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.16), rgba(236, 107, 45, 0.22), transparent);
  filter: blur(0.4px);
  animation: ${sweep} 9.2s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay};
`;

const WheelFocus = styled.div`
  position: absolute;
  right: 17%;
  bottom: 18%;
  width: min(10vw, 138px);
  height: min(10vw, 138px);
  border-radius: 50%;
  border: 1px solid rgba(236, 107, 45, 0.2);
  animation: ${pulse} 5.8s ease-in-out infinite;

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 12%;
    border-radius: 50%;
  }

  &::before {
    border: 1px dashed rgba(255, 255, 255, 0.12);
  }

  &::after {
    inset: 34%;
    border: 1px solid rgba(236, 107, 45, 0.28);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const ReflectionSweep = styled.div`
  position: absolute;
  inset: -12% auto -16% 42%;
  width: 24%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.11), transparent);
  filter: blur(8px);
  opacity: 0;
  animation: ${sweep} 11.5s ease-in-out infinite;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    inset: -8% auto -12% 54%;
    width: 20%;
  }
`;

const ContrastOverlay = styled.div`
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(5, 8, 12, 0.88) 0%, rgba(5, 8, 12, 0.74) 34%, rgba(5, 8, 12, 0.22) 56%, rgba(5, 8, 12, 0.48) 100%),
    linear-gradient(180deg, rgba(5, 8, 12, 0.14), rgba(5, 8, 12, 0.32));
`;

const scanLines = [
  { top: '28%', left: '59%', width: '18%', delay: '0s' },
  { top: '40%', left: '63%', width: '15%', delay: '-1.3s' },
  { top: '56%', left: '57%', width: '20%', delay: '-2.1s' },
  { top: '70%', left: '62%', width: '14%', delay: '-0.8s' },
];

const streaks = [
  { top: '22%', left: '56%', width: '24%', delay: '-0.5s' },
  { top: '48%', left: '60%', width: '18%', delay: '-3.1s' },
];

const points = [
  { top: '26%', left: '73%', delay: '0s' },
  { top: '45%', left: '69%', delay: '-1.6s' },
  { top: '61%', left: '77%', delay: '-2.2s' },
];

export const HeroBackgroundVisual = () => (
  <Wrapper aria-hidden="true">
    <PhotoLayer />
    <AmbientGlow />
    <GridOverlay />
    {scanLines.map((line) => (
      <ScanLine
        key={`${line.top}-${line.left}`}
        $top={line.top}
        $left={line.left}
        $width={line.width}
        $delay={line.delay}
      />
    ))}
    {streaks.map((streak) => (
      <LightStreak
        key={`${streak.top}-${streak.left}`}
        $top={streak.top}
        $left={streak.left}
        $width={streak.width}
        $delay={streak.delay}
      />
    ))}
    {points.map((point) => (
      <AccentPoint
        key={`${point.top}-${point.left}`}
        $top={point.top}
        $left={point.left}
        $delay={point.delay}
      />
    ))}
    <WheelFocus />
    <ReflectionSweep />
    <ContrastOverlay />
  </Wrapper>
);
