'use client';

import { Link } from '@nextui-org/react';
import { ReactNode } from 'react';

import { DateField, SelectField, useForm } from '@/components/form';
import { Gender, RaceEthnicity } from '@/graphql';

import Name from './Name';
import { defaults, schema } from './schema';

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

const Form = (): ReactNode => {
  const { control } = useForm({ schema, defaults });

  return (
    <form className="grid grid-cols-12 flex-col gap-4 py-8">
      <Name />
      <p className="-mt-2 sm:ml-4 col-span-12 text-default-500 text-small">
        Want to change your name? Head to your{' '}
        <Link size="sm" href={process.env.NEXT_PUBLIC_ACCOUNTS_URL}>
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

      <DateField className="col-span-12 md:col-span-6" control={control} name="dateOfBirth" label="Birthday" required />
    </form>
  );
};

export default Form;
