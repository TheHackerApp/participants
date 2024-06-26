'use client';

import { Link } from '@nextui-org/react';
import { ReactNode } from 'react';

import { AutoCompleteSelect, NumberField, SelectField, TextField } from '@/components/form';
import { Education } from '@/graphql';

import { type Schema, schema } from './schema';
import { FormWrapper } from '../../../_components/MultiStepForm';

const EDUCATION_OPTIONS = [
  { label: 'Less than Secondary / High School', value: Education.BelowSecondary },
  { label: 'Secondary / High School', value: Education.Secondary },
  { label: 'Undergraduate University (2 year)', value: Education.UndergraduateTwoYear },
  { label: 'Undergraduate University (3+ year)', value: Education.UndergraduateThreeYearPlus },
  { label: 'Graduate University (Masters, Doctoral, etc.)', value: Education.Graduate },
  { label: 'Code School / Bootcamp', value: Education.Bootcamp },
  { label: 'Other Vocational / Trade Program or Apprenticeship', value: Education.Vocational },
  { label: 'Other', value: Education.Other },
  { label: "I'm not currently a student", value: Education.NonStudent },
];

interface Props {
  defaults: Schema;
}

const Form = ({ defaults }: Props): ReactNode => (
  <FormWrapper schema={schema} defaults={defaults}>
    {(control) => (
      <div className="grid grid-cols-12 flex-col gap-4 py-8">
        <AutoCompleteSelect
          className="col-span-12"
          control={control}
          name="schoolId"
          label="School"
          index="schools"
          required
          description={
            <>
              Can&apos;t find your school?{' '}
              <Link
                className="text-tiny"
                href="mailto:support@thehacker.app?subject=Request%20for%20school%20verification"
              >
                Shoot us an email.
              </Link>
            </>
          }
        />

        <NumberField
          className="col-span-6 md:col-span-4"
          control={control}
          name="graduationYear"
          label="Graduation Year"
          min={1950}
          max={2100}
          required
        />

        <SelectField
          className="col-span-12 md:col-span-8"
          control={control}
          name="education"
          label="Level of study"
          options={EDUCATION_OPTIONS}
          required
        />

        <TextField className="col-span-12 md:col-span-6" control={control} name="major" label="Major" />
      </div>
    )}
  </FormWrapper>
);

export default Form;
