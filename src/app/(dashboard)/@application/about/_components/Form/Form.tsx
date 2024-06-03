'use client';

import { Input, Link } from '@nextui-org/react';
import { ReactNode } from 'react';

import { DateField, SelectField } from '@/components/form';
import { Gender, RaceEthnicity, Referrer } from '@/graphql';

import { type Schema, schema } from './schema';
import { FormWrapper } from '../../../_components/MultiStepForm';

const GENDER_OPTIONS = [
  { label: 'Male', value: Gender.Male },
  { label: 'Female', value: Gender.Female },
  { label: 'Non-binary', value: Gender.NonBinary },
  { label: 'Other', value: Gender.Other },
];

const RACE_ETHNICITY_OPTIONS = [
  { label: 'Asian Indian', value: RaceEthnicity.AsianIndian },
  { label: 'Black or African', value: RaceEthnicity.Black },
  { label: 'Chinese', value: RaceEthnicity.Chinese },
  { label: 'Filipino', value: RaceEthnicity.Filipino },
  { label: 'Guamanian or Chamorro', value: RaceEthnicity.Guamanian },
  { label: 'Hispanic / Latino / Spanish Origin', value: RaceEthnicity.Hispanic },
  { label: 'Japanese', value: RaceEthnicity.Japanese },
  { label: 'Korean', value: RaceEthnicity.Korean },
  { label: 'Middle Eastern', value: RaceEthnicity.MiddleEastern },
  { label: 'Native American or Alaskan Native', value: RaceEthnicity.NativeAmerican },
  { label: 'Native Hawaiian', value: RaceEthnicity.NativeHawaiian },
  { label: 'Samoan', value: RaceEthnicity.Samoan },
  { label: 'Vietnamese', value: RaceEthnicity.Vietnamese },
  { label: 'White', value: RaceEthnicity.White },
  { label: 'Other Asian (Thai, Cambodian, etc.)', value: RaceEthnicity.OtherAsian },
  { label: 'Other Pacific Islander', value: RaceEthnicity.OtherPacificIslander },
  { label: 'Other', value: RaceEthnicity.Other },
];

const REFERRER_OPTIONS = [
  { label: 'Search engine (Google, Bing, etc.)', value: Referrer.Search },
  { label: 'Friend or colleague', value: Referrer.Peer },
  { label: 'Social media (Instagram, TikTok, etc.)', value: Referrer.SocialMedia },
  { label: 'Advertisement', value: Referrer.Advertisement },
  { label: 'Blog or article', value: Referrer.Blog },
  { label: 'Student organization or clob', value: Referrer.StudentOrganization },
  { label: 'School or university', value: Referrer.School },
  { label: 'Other', value: Referrer.Other },
];

interface Props {
  defaults: Schema;
  givenName: string;
  familyName: string;
}

const Form = ({ defaults, givenName, familyName }: Props): ReactNode => (
  <FormWrapper schema={schema} defaults={defaults}>
    {(control) => (
      <div className="grid grid-cols-12 flex-col gap-4 py-8">
        <Input className="col-span-12 md:col-span-6" type="text" label="Given name" isReadOnly value={givenName} />
        <Input className="col-span-12 md:col-span-6" type="text" label="Family name" isReadOnly value={familyName} />
        <p className="-mt-2 sm:ml-4 col-span-12 text-default-500 text-small">
          Want to change your name? Head to your{' '}
          <Link size="sm" href={process.env.NEXT_PUBLIC_ACCOUNTS_URL + '/settings/general'}>
            profile
          </Link>
          .
        </p>

        <SelectField
          className="col-span-12 md:col-span-6"
          control={control}
          name="gender"
          label="Gender"
          options={GENDER_OPTIONS}
          required
        />
        <SelectField
          className="col-span-12 md:col-span-6"
          control={control}
          name="raceEthnicity"
          label="Race / Ethnicity"
          options={RACE_ETHNICITY_OPTIONS}
          required
        />

        <DateField
          className="col-span-12 md:col-span-6"
          control={control}
          name="dateOfBirth"
          label="Birthday"
          required
        />

        <span className="col-span-12" />

        <SelectField
          className="col-span-12 md:col-span-6"
          control={control}
          name="referrer"
          label="How'd you hear about us?"
          options={REFERRER_OPTIONS}
        />
      </div>
    )}
  </FormWrapper>
);

export default Form;
