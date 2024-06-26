'use client';

import { ReactNode } from 'react';

import { BooleanField, NumberField, TextField } from '@/components/form';

import { type Schema, schema } from './schema';
import { FormWrapper } from '../../../_components/MultiStepForm';

interface Props {
  defaults: Schema;
}

const Form = ({ defaults }: Props): ReactNode => (
  <FormWrapper schema={schema} defaults={defaults}>
    {(control) => (
      <div className="grid grid-cols-12 flex-col gap-4 py-8">
        <TextField
          className="col-span-12 md:col-span-6"
          control={control}
          type="url"
          name="vcsUrl"
          label="GitHub / GitLab / BitBucket URL"
        />
        <TextField
          className="col-span-12 md:col-span-6"
          control={control}
          type="url"
          name="portfolioUrl"
          label="Portfolio URL"
        />
        <TextField
          className="col-span-12 md:col-span-6"
          control={control}
          type="url"
          name="devpostUrl"
          label="Devpost URL"
        />

        <span className="col-span-12" />

        <NumberField
          className="col-span-6 md:col-span-4"
          control={control}
          name="hackathonsAttended"
          label="Hackathons attended"
          min={0}
          max={50}
          required
        />

        <BooleanField className="col-span-12" control={control} name="shareInformation">
          I would like to share my profile with sponsors/partners
        </BooleanField>
      </div>
    )}
  </FormWrapper>
);

export default Form;
