import { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';

import Loading from '@/components/Loading';

import Form from './_components/Form';

export const metadata: Metadata = {
  title: 'About you',
};

const About = (): ReactNode => (
  <>
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold leading-9 text-default-foreground">About you</h1>
      <p className="py-2 text-medium text-default-500 text-center max-w-md">
        We just need to get some extra information about you so we can better tailor our hackathon to you.
      </p>
    </div>
    <Suspense fallback={<Loading className="mt-8" />}>
      <Form />
    </Suspense>
  </>
);

export default About;
