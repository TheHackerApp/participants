import { redirect } from 'next/navigation';
import { ReactElement } from 'react';

import { getClient } from '@/graphql/clients/server';

import { RequiredApplicationFieldsDocument } from './RequiredApplicationFields.graphql';

const Application = async (): Promise<ReactElement> => {
  const client = getClient();
  const { data } = await client.query({ query: RequiredApplicationFieldsDocument });

  if (!data.draftApplication) redirect(`about`);

  if (!(data.draftApplication.gender && data.draftApplication.raceEthnicity && data.draftApplication.dateOfBirth))
    redirect('about');

  if (!(data.draftApplication.school?.id && data.draftApplication.education && data.draftApplication.graduationYear))
    redirect('education');

  if (!data.draftApplication.hackathonsAttended) redirect('experience');

  if (!(data.draftApplication.addressLine1 && data.draftApplication.postalCode && data.draftApplication.country))
    redirect('shipping');

  redirect('review');
};

export default Application;
