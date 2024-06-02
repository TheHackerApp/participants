'use client';

import { ReactNode, useCallback, useMemo, useTransition } from 'react';
import type { Control, DefaultValues } from 'react-hook-form';
import type { AnyZodObject, TypeOf } from 'zod';

import { useForm } from '@/components/form';

import Controls from './_components/Controls';
import { saveApplication } from './actions';
import { useFormContext } from '../FormContext';

interface Props<TSchema extends AnyZodObject> {
  schema: TSchema;
  defaults: DefaultValues<TypeOf<TSchema>>;
  children: (control: Control<TypeOf<TSchema>>) => ReactNode;
}

const FormWrapper = <TSchema extends AnyZodObject>({ children, schema, defaults }: Props<TSchema>): ReactNode => {
  const { control, handleSubmit } = useForm({ schema, defaults });
  const [isPending, startTransition] = useTransition();
  const { page, steps } = useFormContext();

  const action = useCallback(
    (form: TypeOf<TSchema>) =>
      startTransition(async () => {
        await saveApplication(steps[page + 1]?.path, form);
      }),
    [startTransition, page, steps],
  );
  const onSubmit = useMemo(() => handleSubmit(action), [handleSubmit, action]);

  return (
    <form onSubmit={onSubmit}>
      {children(control)}
      <Controls control={control} loading={isPending} />
    </form>
  );
};

export default FormWrapper;
