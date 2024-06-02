'use server';

import { redirect } from 'next/navigation';
import { AnyZodObject, TypeOf } from 'zod';

import { getClient } from '@/graphql/clients/server';

import { SaveApplicationDocument } from './SaveApplication.graphql';

export const saveApplication = async <TSchema extends AnyZodObject>(
  next: string | undefined,
  form: TypeOf<TSchema>,
): Promise<void> => {
  const client = getClient();
  const { data, errors } = await client.mutate({ mutation: SaveApplicationDocument, variables: { input: form } });

  if (!data || errors) {
    // TODO: handle errors
    throw new Error('saving application failed');
  }

  redirect(next ?? '/');
};
