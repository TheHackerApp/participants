import { ReactElement } from 'react';

import { getClient } from '@/graphql/clients/server';

import { ApplicationEducationStateDocument } from './ApplicationEducationState.graphql';
import Form from './Form';

const Loader = async (): Promise<ReactElement> => {
  const client = getClient();
  const { data } = await client.query({ query: ApplicationEducationStateDocument });

  const defaults = {
    education: data.draftApplication?.education ?? null,
    graduationYear: data.draftApplication?.graduationYear ?? null,
    major: data.draftApplication?.major ?? null,
  };

  return <Form defaults={defaults} />;
};

export default Loader;
