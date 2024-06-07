'use client';

import { ReactNode } from 'react';

import { useApplicationExperienceStateSuspenseQuery } from './ApplicationExperienceState.graphql';
import Form from './Form';

const Loader = (): ReactNode => {
  const { data } = useApplicationExperienceStateSuspenseQuery();

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
