import { LazyMotion, domAnimation, m } from 'framer-motion';
import Link from 'next/link';
import { ReactNode, forwardRef } from 'react';

import { cn } from '@/lib/styles';

import CheckIcon from './CheckIcon';
import { type Props, colors } from './types';

const HorizontalSteps = forwardRef<HTMLAnchorElement, Props>(
  ({ steps, currentStep, className, ...props }, ref): ReactNode => {
    const renderedSteps = steps.map((step, stepIndex) => {
      const status = currentStep === stepIndex ? 'active' : currentStep < stepIndex ? 'inactive' : 'complete';

      return (
        <li key={stepIndex} className="relative flex w-full items-center pr-8">
          <Link
            key={stepIndex}
            ref={ref}
            aria-current={status === 'active' ? 'step' : undefined}
            className="group flex w-full cursor-pointer flex-row items-center justify-center gap-x-3 rounded-large py-2.5"
            href={step.path}
            {...props}
          >
            <div className="h-full relative flex items-center">
              <LazyMotion features={domAnimation}>
                <m.div animate={status} className="relative">
                  <m.div
                    className={cn(
                      'relative flex h-[26px] w-[26px] items-center justify-center rounded-full border-medium text-large font-semibold text-default-foreground',
                      { 'shadow-lg': status === 'complete' },
                    )}
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
                </m.div>
              </LazyMotion>
            </div>
            {stepIndex < steps.length - 1 && (
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 left-[26px] w-[calc(100%_-_13px)] flex-none items-center"
              >
                <div
                  className={cn(
                    'relative h-0.5 w-full bg-[var(--inactive-bar-color)] transition-colors duration-300',
                    "after:absolute after:block after:h-full after:w-0 after:bg-[var(--active-border-color)] after:transition-[width] after:duration-300 after:content-['']",
                    {
                      'after:w-full': stepIndex < currentStep,
                    },
                  )}
                />
              </div>
            )}
          </Link>
        </li>
      );
    });

    return (
      <nav aria-label="progress" className="flex flex-col max-w-fit items-center">
        <ol className={cn('flex flex-row flex-nowrap gap-x-3 overflow-x-scroll', colors, className)}>
          {renderedSteps}
        </ol>
        <label className="mr-2 text-small font-medium text-default-foreground lg:text-medium">
          {steps[currentStep]?.title}
        </label>
      </nav>
    );
  },
);
HorizontalSteps.displayName = 'HorizontalSteps';

export default HorizontalSteps;
