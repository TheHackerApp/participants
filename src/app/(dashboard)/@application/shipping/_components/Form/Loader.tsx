'use client';

import { ReactNode } from 'react';

import { useApplicationShippingStateSuspenseQuery } from './ApplicationShippingState.graphql';
import Form from './Form';

const Loader = (): ReactNode => {
  const { data } = useApplicationShippingStateSuspenseQuery();

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
