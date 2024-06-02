import { Metadata } from 'next';
import { ReactElement } from 'react';

import { getClient } from '@/graphql/clients/server';

import Form from './_components/Form';
import { ApplicationAboutStateDocument } from './ApplicationAboutState.graphql';

export const metadata: Metadata = {
  title: 'About you',
};

const About = async (): Promise<ReactElement> => {
  const client = getClient();
  const { data } = await client.query({ query: ApplicationAboutStateDocument });

  const defaults = {
    gender: data.draftApplication?.gender ?? null,
    raceEthnicity: data.draftApplication?.raceEthnicity ?? null,
    dateOfBirth: data.draftApplication?.dateOfBirth ?? null,
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold leading-9 text-default-foreground">About you</h1>
        <p className="py-2 text-medium text-default-500 text-center max-w-md">
          We just need to get some extra information about you so we can better tailor our hackathon to you.
        </p>
      </div>
      <Form defaults={defaults} givenName={data.me.givenName} familyName={data.me.familyName} />
    </>
  );
};

export default About;
