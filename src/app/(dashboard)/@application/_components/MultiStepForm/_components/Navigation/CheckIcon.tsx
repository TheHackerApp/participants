import { m } from 'framer-motion';
import { ComponentProps, ReactNode } from 'react';

const CheckIcon = (props: ComponentProps<'svg'>): ReactNode => (
  <svg {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <m.path
      animate={{ pathLength: 1 }}
      d="M5 13l4 4L19 7"
      initial={{ pathLength: 0 }}
      strokeLinecap="round"
      strokeLinejoin="round"
      transition={{
        delay: 0.2,
        type: 'tween',
        ease: 'easeOut',
        duration: 0.3,
      }}
    />
  </svg>
);

export default CheckIcon;
