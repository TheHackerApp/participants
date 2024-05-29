'use client';

import { faArrowLeft } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { HTMLAttributes, ReactNode, useMemo } from 'react';

import { cn } from '@/lib/styles';

import Header from './_components/Header';
import NavigationButtons from './_components/NavigationButtons';
import { HorizontalSteps, type Step, VerticalSteps } from './_components/Steps';

interface Props extends HTMLAttributes<HTMLDivElement> {
  steps: Step[];
}

const MultiStepForm = ({ className, steps, children, ...props }: Props): ReactNode => {
  const router = useRouter();
  const path = usePathname();
  const page = useMemo(() => steps.findIndex((step) => step.path === path), [steps, path]);

  return (
    <div className={cn('flex h-[calc(100vh_-_60px)] w-full gap-x-2', className)} {...props}>
      <div className="flex hidden h-full w-[344px] flex-shrink-0 flex-col items-start gap-y-8 rounded-large bg-gradient-to-b from-default-100 via-danger-100 to-secondary-100 px-8 py-6 shadow-small lg:flex">
        <Header />
        <VerticalSteps steps={steps} currentStep={page} />
        <Button
          as={Link}
          className="bg-default-100 text-small font-medium text-default-700 shadow-lg"
          isDisabled={page === 0}
          radius="full"
          variant="flat"
          href={steps[page - 1]?.path || '#'}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </Button>
      </div>
      <div className="flex h-full w-full flex-col items-center gap-4 md:p-4">
        <div className="sticky top-0 z-10 w-full rounded-large bg-gradient-to-r from-default-100 via-danger-100 to-secondary-100 py-4 shadow-small md:max-w-xl lg:hidden">
          <div className="flex flex-col items-center justify-center">
            <Header className="text-center" />
            <HorizontalSteps className="pl-8" steps={steps} currentStep={page} />
          </div>
        </div>
        <div className="h-full w-full p-4 sm:max-w-lg md:max-w-2xl">
          {children}
          <NavigationButtons
            steps={steps}
            currentPage={page}
            onNext={() => router.push(steps[page + 1]?.path || '#')}
            backButtonProps={{ isDisabled: page === 0 }}
          />
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
