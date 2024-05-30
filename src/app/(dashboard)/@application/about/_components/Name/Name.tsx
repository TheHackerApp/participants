'use client';

import { Input } from '@nextui-org/react';
import { ReactNode } from 'react';

import { useNameSuspenseQuery } from './Name.graphql';

const Name = (): ReactNode => {
  const { data } = useNameSuspenseQuery();

  return (
    <>
      <Input
        className="col-span-12 md:col-span-6"
        type="text"
        label="Given name"
        isReadOnly
        value={data.me.givenName}
      />
      <Input
        className="col-span-12 md:col-span-6"
        type="text"
        label="Family name"
        isReadOnly
        value={data.me.familyName}
      />
    </>
  );
};

export default Name;
