import { ReactNode } from 'react';

import Form from './_components/Form';

const Education = (): ReactNode => (
  <>
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold leading-9 text-default-foreground">Education</h1>
      <p className="py-2 text-medium text-default-500 text-center max-w-md">
        Tell us about your most recent education. If you&apos;re not currently a student, put in the most recent school
        you attended.
      </p>
    </div>
    <Form />
  </>
);

export default Education;
