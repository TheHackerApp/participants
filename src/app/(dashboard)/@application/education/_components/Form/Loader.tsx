'use client';

import { ReactNode } from 'react';

import { useApplicationEducationStateSuspenseQuery } from './ApplicationEducationState.graphql';
import Form from './Form';

const Loader = (): ReactNode => {
  const { data } = useApplicationEducationStateSuspenseQuery();

  const defaults = {
    education: data.draftApplication?.education ?? null,
    graduationYear: data.draftApplication?.graduationYear ?? null,
    major: data.draftApplication?.major ?? null,
    schoolId: data.draftApplication?.school?.id ?? null,
  };

  return <Form defaults={defaults} />;
};

export default Loader;
