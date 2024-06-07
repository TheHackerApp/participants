'use client';

import { ReactNode } from 'react';

import { useApplicationAboutStateSuspenseQuery } from './ApplicationAboutState.graphql';
import Form from './Form';

const Loader = (): ReactNode => {
  const { data } = useApplicationAboutStateSuspenseQuery();

  const defaults = {
    gender: data.draftApplication?.gender ?? null,
    raceEthnicity: data.draftApplication?.raceEthnicity ?? null,
    dateOfBirth: data.draftApplication?.dateOfBirth ?? null,
    referrer: data.draftApplication?.referrer ?? null,
  };

  return <Form defaults={defaults} givenName={data.me.givenName} familyName={data.me.familyName} />;
};

export default Loader;
