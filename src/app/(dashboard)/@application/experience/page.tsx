import { Metadata } from 'next';
import { ReactElement } from 'react';

import { getClient } from '@/graphql/clients/server';

import Form from './_components/Form';
import { ApplicationExperienceStateDocument } from './ApplicationExperienceState.graphql';

export const metadata: Metadata = {
  title: 'Experience',
};

const Experience = async (): Promise<ReactElement> => {
  const client = getClient();
  const { data } = await client.query({ query: ApplicationExperienceStateDocument });

  const defaults = {
    vcsUrl: data.draftApplication?.vcsUrl ?? null,
    portfolioUrl: data.draftApplication?.portfolioUrl ?? null,
    devpostUrl: data.draftApplication?.devpostUrl ?? null,
    hackathonsAttended: data.draftApplication?.hackathonsAttended ?? null,
    shareInformation: data.draftApplication?.shareInformation ?? true,
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold leading-9 text-default-foreground">Experience</h1>
        <p className="py-2 text-medium text-default-500 text-center max-w-md">
          Even if this is your first hackathon, we&apos;d love to see your portfolio or any past projects you&apos;ve
          worked on.
        </p>
      </div>
      <Form defaults={defaults} />
    </>
  );
};

export default Experience;
