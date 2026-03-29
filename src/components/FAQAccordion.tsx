import { motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';

import type { FAQItem } from '../types/faq';
import { Icon } from './Icon';
import { fadeUpVariants, revealViewport } from './motionTokens';

interface FAQAccordionProps {
  items: FAQItem[];
}

const Wrap = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing(3)};
`;

const Item = styled(motion.div)<{ $open: boolean }>`
  border-radius: ${({ theme }) => theme.radii.lg};
  border: 1px solid ${({ theme, $open }) => ($open ? theme.colors.borderStrong : theme.colors.border)};
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const Trigger = styled.button<{ $open: boolean }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme }) => theme.spacing(5)};
  text-align: left;
  color: ${({ theme }) => theme.colors.heading};
  font-size: 1.02rem;
  font-weight: 800;

  svg {
    flex-shrink: 0;
    transform: rotate(${({ $open }) => ($open ? '90deg' : '0deg')});
    transition: transform ${({ theme }) => theme.transitions.base};
  }
`;

const Panel = styled.div`
  padding: 0 ${({ theme }) => theme.spacing(5)} ${({ theme }) => theme.spacing(5)};

  p {
    line-height: 1.7;
  }
`;

export const FAQAccordion = ({ items }: FAQAccordionProps) => {
  const [openId, setOpenId] = useState<string>(items[0]?.id ?? '');

  return (
    <Wrap>
      {items.map((item) => {
        const isOpen = item.id === openId;

        return (
          <Item
            key={item.id}
            $open={isOpen}
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
          >
            <Trigger
              type="button"
              $open={isOpen}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${item.id}`}
              id={`faq-trigger-${item.id}`}
              onClick={() => setOpenId(isOpen ? '' : item.id)}
            >
              {item.question}
              <Icon name="arrow" size={18} />
            </Trigger>
            {isOpen ? (
              <Panel
                id={`faq-panel-${item.id}`}
                role="region"
                aria-labelledby={`faq-trigger-${item.id}`}
              >
                <p>{item.answer}</p>
              </Panel>
            ) : null}
          </Item>
        );
      })}
    </Wrap>
  );
};
