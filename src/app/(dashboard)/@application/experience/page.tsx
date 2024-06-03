import { Metadata } from 'next';
import { ReactElement, Suspense } from 'react';

import Loading from '@/components/Loading';

import Form from './_components/Form';

export const metadata: Metadata = {
  title: 'Experience',
};

const Experience = async (): Promise<ReactElement> => (
  <>
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold leading-9 text-default-foreground">Experience</h1>
      <p className="py-2 text-medium text-default-500 text-center max-w-md">
        Even if this is your first hackathon, we&apos;d love to see your portfolio or any past projects you&apos;ve
        worked on.
      </p>
    </div>
    <Suspense fallback={<Loading />}>
      <Form />
    </Suspense>
  </>
);

export default Experience;
