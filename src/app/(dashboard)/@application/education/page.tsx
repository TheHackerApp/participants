import { Metadata } from 'next';
import { ReactElement } from 'react';

import { getClient } from '@/graphql/clients/server';

import Form from './_components/Form';
import { ApplicationEducationStateDocument } from './ApplicationEducationState.graphql';

export const metadata: Metadata = {
  title: 'Education',
};

const Education = async (): Promise<ReactElement> => {
  const client = getClient();
  const { data } = await client.query({ query: ApplicationEducationStateDocument });

  const defaults = {
    education: data.draftApplication?.education ?? null,
    graduationYear: data.draftApplication?.graduationYear ?? null,
    major: data.draftApplication?.major ?? null,
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold leading-9 text-default-foreground">Education</h1>
        <p className="py-2 text-medium text-default-500 text-center max-w-md">
          Tell us about your most recent education. If you&apos;re not currently a student, put in the most recent
          school you attended.
        </p>
      </div>
      <Form defaults={defaults} />
    </>
  );
};

export default Education;
