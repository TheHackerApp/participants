'use client';

import { useControlledState } from '@react-stately/utils';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { ReactNode, forwardRef } from 'react';

import { cn } from '@/lib/styles';

import CheckIcon from './CheckIcon';
import { type Props, colors } from './types';

const VerticalSteps = forwardRef<HTMLButtonElement, Props>(
  (
    { steps = [], className, defaultStep = 0, currentStep: currentStepProp, onStepChange, ...props },
    ref,
  ): ReactNode => {
    const [currentStep, setCurrentStep] = useControlledState(currentStepProp, defaultStep, onStepChange);

    const renderedSteps = steps.map((step, stepIndex) => {
      const status = currentStep === stepIndex ? 'active' : currentStep < stepIndex ? 'inactive' : 'complete';

      return (
        <li key={stepIndex} className="relative">
          <div className="flex w-full max-w-full items-center">
            <button
              key={stepIndex}
              ref={ref}
              aria-current={status === 'active' ? 'step' : undefined}
              className="group flex w-full cursor-pointer items-center justify-center gap-4 rounded-large px-3 py-2.5"
              onClick={() => setCurrentStep(stepIndex)}
              {...props}
            >
              <div className="flex h-full items-center">
                <LazyMotion features={domAnimation}>
                  <div className="relative">
                    <m.div
                      animate={status}
                      className={cn(
                        'relative flex h-[34px] w-[34px] items-center justify-center rounded-full border-medium text-large font-semibold text-default-foreground',
                        { 'shadow-lg': status === 'complete' },
                      )}
                      data-status={status}
                      initial={false}
                      transition={{ duration: 0.25 }}
                      variants={{
                        inactive: {
                          backgroundColor: 'transparent',
                          borderColor: 'var(--inactive-border-color)',
                          color: 'var(--inactive-color)',
                        },
                        active: {
                          backgroundColor: 'transparent',
                          borderColor: 'var(--active-border-color)',
                          color: 'var(--active-color)',
                        },
                        complete: {
                          backgroundColor: 'var(--complete-background-color)',
                          borderColor: 'var(--complete-border-color)',
                        },
                      }}
                    >
                      <div className="flex items-center justify-center">
                        {status === 'complete' ? (
                          <CheckIcon className="h-6 w-6 text-[var(--active-fg-color)]" />
                        ) : (
                          <span>{stepIndex + 1}</span>
                        )}
                      </div>
                    </m.div>
                  </div>
                </LazyMotion>
              </div>
              <div className="flex-1 text-left">
                <div>
                  <h3
                    className={cn(
                      'text-medium font-medium text-default-foreground transition-[color,opacity] duration-300 group-active:opacity-70',
                      { 'text-default-500': status === 'inactive' },
                    )}
                  >
                    {step.title}
                  </h3>
                  {step.description && (
                    <p
                      className={cn(
                        'text-tiny text-default-600 transition-[color,opacity] duration-300 group-active:opacity-70 lg:text-small',
                        { 'text-default-500': status === 'inactive' },
                      )}
                    >
                      {step.description}
                    </p>
                  )}
                </div>
              </div>
            </button>
          </div>
          {stepIndex < steps.length - 1 && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-3 top-[calc(64px_*_var(--idx)_+_1)] flex h-1/2 -translate-y-1/3 items-center px-4"
              style={{
                // @ts-expect-error Setting CSS variable, not part of type definitions
                '--idx': stepIndex,
              }}
            >
              <div
                className={cn(
                  'relative h-full w-0.5 bg-[var(--inactive-bar-color)] transition-colors duration-300',
                  "after:absolute after:block after:h-0 after:w-full after:bg-[var(--active-border-color)] after:transition-[height] after:duration-300 after:content-['']",
                  { 'after:h-full': stepIndex < currentStep },
                )}
              />
            </div>
          )}
        </li>
      );
    });

    return (
      <nav aria-label="Progress" className="max-w-fit">
        <ol className={cn('flex flex-col gap-y-3', colors, className)}>{renderedSteps}</ol>
      </nav>
    );
  },
);
VerticalSteps.displayName = 'VerticalSteps';

export default VerticalSteps;
