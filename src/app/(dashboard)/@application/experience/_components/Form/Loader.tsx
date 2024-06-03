import { ReactElement } from 'react';

import { getClient } from '@/graphql/clients/server';

import { ApplicationExperienceStateDocument } from './ApplicationExperienceState.graphql';
import Form from './Form';

const Loader = async (): Promise<ReactElement> => {
  const client = getClient();
  const { data } = await client.query({ query: ApplicationExperienceStateDocument });

  const defaults = {
    vcsUrl: data.draftApplication?.vcsUrl ?? null,
    portfolioUrl: data.draftApplication?.portfolioUrl ?? null,
    devpostUrl: data.draftApplication?.devpostUrl ?? null,
    hackathonsAttended: data.draftApplication?.hackathonsAttended ?? null,
    shareInformation: data.draftApplication?.shareInformation ?? true,
  };

  return <Form defaults={defaults} />;
};

export default Loader;
