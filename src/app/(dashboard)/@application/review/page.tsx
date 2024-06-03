import { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';

import Loading from '@/components/Loading';

import Fields from './_components/Fields';
import Submit from './_components/Submit';
import { submit } from './actions';

export const metadata: Metadata = {
  title: 'Review',
};

const Review = (): ReactNode => (
  <div className="space-y-4">
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold leading-9 text-default-foreground">Review</h1>
      <p className="py-2 text-medium text-default-500 text-center max-w-md">
        Check everything&apos;s correct before you submit! Once your application is submitted, you won&apos;t be able to
        change it.
      </p>
    </div>
    <Suspense fallback={<Loading />}>
      <Fields />
    </Suspense>
    <Submit action={submit} />
  </div>
);

export default Review;
