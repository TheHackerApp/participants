import { ReactElement } from 'react';

import { getClient } from '@/graphql/clients/server';

import { ApplicationShippingStateDocument } from './ApplicationShippingState.graphql';
import Form from './Form';

const Loader = async (): Promise<ReactElement> => {
  const client = getClient();
  const { data } = await client.query({ query: ApplicationShippingStateDocument });

  const defaults = {
    addressLine1: data.draftApplication?.addressLine1 ?? null,
    addressLine2: data.draftApplication?.addressLine2 ?? null,
    addressLine3: data.draftApplication?.addressLine3 ?? null,
    locality: data.draftApplication?.locality ?? null,
    administrativeArea: data.draftApplication?.administrativeArea ?? null,
    postalCode: data.draftApplication?.postalCode ?? null,
    country: data.draftApplication?.country ?? null,
  };

  return <Form defaults={defaults} />;
};

export default Loader;
