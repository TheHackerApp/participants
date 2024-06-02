'use client';

import { ReactNode } from 'react';

import { TextField, useForm } from '@/components/form';

import { type Schema, schema } from './schema';
import { FormControls } from '../../_components/MultiStepForm';

interface Props {
  defaults: Schema;
}

const Form = ({ defaults }: Props): ReactNode => {
  const { control } = useForm({ schema, defaults });

  return (
    <form>
      <div className="grid grid-cols-12 flex-col gap-4 py-8">
        <TextField
          className="col-span-12 md:col-span-9"
          control={control}
          name="addressLine1"
          label="Address line 1"
          required
        />
        <TextField className="col-span-12 md:col-span-9" control={control} name="addressLine2" label="Address line 2" />
        <TextField className="col-span-12 md:col-span-9" control={control} name="addressLine3" label="Address line 3" />

        <TextField className="col-span-12 md:col-span-6" control={control} name="locality" label="City" />
        <TextField
          className="col-span-12 md:col-span-6"
          control={control}
          name="administrativeArea"
          label="State / Province"
        />
        <TextField
          className="col-span-12 md:col-span-6"
          control={control}
          name="locality"
          label="Postcal code"
          required
        />
        <TextField className="col-span-12 md:col-span-6" control={control} name="locality" label="Country" required />
      </div>

      <FormControls control={control} />
    </form>
  );
};

export default Form;
