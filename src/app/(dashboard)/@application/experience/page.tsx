import { ReactNode } from 'react';

import Form from './_components/Form';

const Experience = (): ReactNode => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold leading-9 text-default-foreground">Experience</h1>
        <p className="py-2 text-medium text-default-500 text-center max-w-md">
          Even if this is your first hackathon, we&apos;d love to see your portfolio or any past projects you&apos;ve
          worked on.
        </p>
      </div>
      <Form />
    </>
  );
};

export default Experience;
