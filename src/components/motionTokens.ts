import type { Transition, Variants } from 'framer-motion';

// Модуль є єдиним джерелом параметрів появи для карток і секцій:
// спільна easing-крива, одноразовий поріг viewport та fade-up варіанти.
// Експорти лише описують конфігурацію Framer Motion і не запускають анімацію самі.
export const smoothRevealTransition: Transition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1],
};

export const revealViewport = {
  once: true,
  amount: 0.18,
};

export const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: smoothRevealTransition,
  },
};
