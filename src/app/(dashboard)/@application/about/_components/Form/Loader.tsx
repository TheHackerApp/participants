import { ReactElement } from 'react';

import { getClient } from '@/graphql/clients/server';

import { ApplicationAboutStateDocument } from './ApplicationAboutState.graphql';
import Form from './Form';

const Loader = async (): Promise<ReactElement> => {
  const client = getClient();
  const { data } = await client.query({ query: ApplicationAboutStateDocument });

  const defaults = {
    gender: data.draftApplication?.gender ?? null,
    raceEthnicity: data.draftApplication?.raceEthnicity ?? null,
    dateOfBirth: data.draftApplication?.dateOfBirth ?? null,
  };

  return <Form defaults={defaults} givenName={data.me.givenName} familyName={data.me.familyName} />;
};

export default Loader;
