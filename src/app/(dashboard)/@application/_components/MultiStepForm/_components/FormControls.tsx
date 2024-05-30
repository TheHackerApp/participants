'use client';

import { Button, ButtonProps } from '@nextui-org/react';
import Link from 'next/link';
import { HTMLAttributes, ReactNode } from 'react';
import { Control, FieldValues } from 'react-hook-form';

import { Submit } from '@/components/form';
import { cn } from '@/lib/styles';

import { useFormContext } from './FormContext';

interface Props<TFieldValues extends FieldValues> extends HTMLAttributes<HTMLDivElement> {
  control: Control<TFieldValues>;
  backButtonProps?: ButtonProps;
  nextButtonProps?: ButtonProps;
}

const FormControls = <TFieldValues extends FieldValues>({
  control,
  className,
  backButtonProps,
  nextButtonProps,
  ...props
}: Props<TFieldValues>): ReactNode => {
  const { page, steps } = useFormContext();

  return (
    <div className={cn('mx-auto my-6 flex w-full items-center justify-center gap-x-4 lg:mx-0', className)} {...props}>
      <Button
        as={Link}
        className="rounded-medium border-default-400 text-medium font-medium text-default-600 lg:hidden"
        variant="bordered"
        href={steps[page - 1]?.path || '#'}
        {...backButtonProps}
      >
        Previous
      </Button>
      <Submit
        control={control}
        className="text-medium font-medium"
        style={{
          border: 'solid 2px transparent',
          backgroundImage: `linear-gradient(hsl(var(--nextui-background)), hsl(var(--nextui-background))), linear-gradient(to right, #F871A0, #9353D3)`,
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box',
        }}
        label={page < steps.length - 1 ? 'Next' : 'Submit'}
        {...nextButtonProps}
      />
    </div>
  );
};

export default FormControls;
