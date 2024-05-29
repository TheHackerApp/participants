import { HTMLAttributes, ReactNode } from 'react';

export interface Step {
  className?: string;
  title: ReactNode;
  description?: ReactNode;
}

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  steps?: Step[];
  currentStep?: number;
  defaultStep?: number;
  onStepChange?: (stepIndex: number) => void;
  className?: string;
}

export const colors = [
  // default
  '[--step-fg-color:hsl(var(--nextui-secondary-foreground))]',
  '[--active-fg-color:var(--step-fg-color)]',
  '[--active-border-color:var(--step-color)]',
  '[--complete-background-color:var(--step-color)]',
  '[--complete-border-color:var(--step-color)]',

  // light
  '[--step-color:hsl(var(--nextui-secondary-400))]',
  '[--active-color:hsl(var(--nextui-secondary-400))]',
  '[--inactive-border-color:hsl(var(--nextui-secondary-200))]',
  '[--inactive-bar-color:hsl(var(--nextui-secondary-200))]',
  '[--inactive-color:hsl(var(--nextui-secondary-300))]',

  // dark
  'dark:[--step-color:rgba(255,255,255,0.1)]',
  'dark:[--active-color:hsl(var(--nextui-foreground-600))]',
  'dark:[--active-border-color:rgba(255,255,255,0.5)]',
  'dark:[--inactive-border-color:rgba(255,255,255,0.1)]',
  'dark:[--inactive-bar-color:rgba(255,255,255,0.1)]',
  'dark:[--inactive-color:rgba(255,255,255,0.2)]',
];
