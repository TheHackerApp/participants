import { Metadata } from 'next';
import { ReactElement } from 'react';

import { getClient } from '@/graphql/clients/server';

import Form from './_components/Form';
import { ApplicationShippingStateDocument } from './ApplicationShippingState.graphql';

export const metadata: Metadata = {
  title: 'Shipping',
};

const Shipping = async (): Promise<ReactElement> => {
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

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold leading-9 text-default-foreground">Shipping</h1>
        <p className="py-2 text-medium text-default-500 text-center max-w-md">
          We&apos;ll use this to send you any swag receive or prizes you win. Please make sure to use an address where
          you can receive mail.
        </p>
      </div>
      <Form defaults={defaults} />
    </>
  );
};

export default Shipping;
