import { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';

import Loading from '@/components/Loading';

import Form from './_components/Form';

export const metadata: Metadata = {
  title: 'Shipping',
};

const Shipping = (): ReactNode => (
  <>
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold leading-9 text-default-foreground">Shipping</h1>
      <p className="py-2 text-medium text-default-500 text-center max-w-md">
        We&apos;ll use this to send you any swag receive or prizes you win. Please make sure to use an address where you
        can receive mail.
      </p>
    </div>
    <Suspense fallback={<Loading className="mt-8" />}>
      <Form />
    </Suspense>
  </>
);

export default Shipping;
