'use client';

import { useRouter } from 'next/navigation';
import { ReactNode, useCallback } from 'react';
import type { Control, DefaultValues } from 'react-hook-form';
import type { AnyZodObject, TypeOf } from 'zod';

import { useForm } from '@/components/form';

import Controls from './_components/Controls';
import { useSaveApplicationMutation } from './SaveApplication.graphql';
import { useFormContext } from '../FormContext';

interface Props<TSchema extends AnyZodObject> {
  schema: TSchema;
  defaults: DefaultValues<TypeOf<TSchema>>;
  children: (control: Control<TypeOf<TSchema>>) => ReactNode;
}

const FormWrapper = <TSchema extends AnyZodObject>({ children, schema, defaults }: Props<TSchema>): ReactNode => {
  const { control, handleSubmit } = useForm({ schema, defaults });

  const { page, steps } = useFormContext();
  const router = useRouter();
  const [save, { loading }] = useSaveApplicationMutation();

  const onSubmit = useCallback(
    async (data: TypeOf<TSchema>) => {
      try {
        await save({ variables: { input: data } });
      } catch {
        // GraphQL errors handled by middleware
        return;
      }

      const step = steps[page + 1];
      if (step) router.push(step.path);
    },
    [save, router, page, steps],
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {children(control)}
      <Controls control={control} loading={loading} />
    </form>
  );
};

export default FormWrapper;
