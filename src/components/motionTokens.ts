import type { Transition, Variants } from 'framer-motion';

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
