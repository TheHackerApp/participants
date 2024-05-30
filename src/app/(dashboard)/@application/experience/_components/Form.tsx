'use client';

import { ReactNode } from 'react';

import { BooleanField, NumberField, TextField, useForm } from '@/components/form';

import { defaults, schema } from './schema';
import { FormControls } from '../../_components/MultiStepForm';

const Form = (): ReactNode => {
  const { control } = useForm({ schema, defaults });

  return (
    <form>
      <div className="grid grid-cols-12 flex-col gap-4 py-8">
        <TextField
          className="col-span-12 md:col-span-6"
          control={control}
          type="url"
          name="links.0"
          label="GitHub / GitLab / BitBucket URL"
        />
        <TextField
          className="col-span-12 md:col-span-6"
          control={control}
          type="url"
          name="links.1"
          label="Portfolio URL"
        />
        <TextField
          className="col-span-12 md:col-span-6"
          control={control}
          type="url"
          name="links.2"
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

      <FormControls control={control} />
    </form>
  );
};

export default Form;
