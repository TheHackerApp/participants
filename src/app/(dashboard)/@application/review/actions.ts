'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import { getClient } from '@/graphql/clients/server';

import { SubmitApplicationDocument } from './SubmitApplication.graphql';

export async function submit(): Promise<string[]> {
  const client = getClient();

  const { data } = await client.mutate({ mutation: SubmitApplicationDocument });

  if (!data) return [];

  if (data.submitApplication.userErrors.length > 0) {
    return data.submitApplication.userErrors.map(
      (error) => error.message.charAt(0).toUpperCase() + error.message.slice(1),
    );
  }

  revalidatePath('/', 'layout');
  redirect('/');
}
