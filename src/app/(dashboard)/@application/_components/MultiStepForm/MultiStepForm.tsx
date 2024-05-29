'use client';

import { faArrowLeft } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@nextui-org/react';
import { HTMLAttributes, ReactNode, useCallback, useState } from 'react';

import { cn } from '@/lib/styles';

import NavigationButtons from './_components/NavigationButtons';
import { HorizontalSteps, type Step, VerticalSteps } from './_components/Steps';

interface Props extends HTMLAttributes<HTMLDivElement> {
  steps: Step[];
}

const MultiStepForm = ({ children, className, steps, ...props }: Props): ReactNode => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = useCallback(
    (newDirection: number) =>
      setPage((previous) => {
        const previousPage = previous[0];
        const nextPage = previousPage + newDirection;
        if (nextPage < 0 || nextPage > steps.length - 1) return previous;
        else return [nextPage, newDirection];
      }),
    [steps],
  );

  const onChangePage = useCallback(
    (newPage: number) =>
      setPage((previous) => {
        if (newPage < 0 || newPage > steps.length - 1) return previous;

        const currentPage = previous[0];
        return [newPage, newPage > currentPage ? 1 : -1];
      }),
    [steps],
  );

  const onBack = useCallback(() => paginate(-1), [paginate]);
  const onNext = useCallback(() => paginate(1), [paginate]);

  return (
    <div className={cn('flex h-[calc(100vh_-_60px)] w-full gap-x-2', className)} {...props}>
      <div className="flex hidden h-full w-[344px] flex-shrink-0 flex-col items-start gap-y-8 rounded-large bg-gradient-to-b from-default-100 via-danger-100 to-secondary-100 px-8 py-6 shadow-small lg:flex">
        <div>
          <h1 className="text-xl font-medium leading-7 text-default-foreground">Complete your application</h1>
          <p className="mt-1 text-base font-medium leading-6 text-default-500">
            Apply to take part in our incredible hackathon experience!
          </p>
        </div>
        <VerticalSteps currentStep={page} steps={steps} onStepChange={onChangePage} />
        <Button
          className="bg-default-100 text-small font-medium text-default-700 shadow-lg"
          isDisabled={page === 0}
          radius="full"
          variant="flat"
          onPress={onBack}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </Button>
      </div>
      <div className="flex h-full w-full flex-col items-center gap-4 md:p-4">
        <div className="sticky top-0 z-10 w-full rounded-large bg-gradient-to-r from-default-100 via-danger-100 to-secondary-100 py-4 shadow-small md:max-w-xl lg:hidden">
          <div className="flex justify-center">
            <HorizontalSteps className="pl-8" currentStep={page} steps={steps} onStepChange={onChangePage} />
          </div>
        </div>
        <div className="h-full w-full p-4 sm:max-w-md md:max-w-lg">
          {children}
          <NavigationButtons onBack={onBack} onNext={onNext} backButtonProps={{ isDisabled: page === 0 }} />
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
