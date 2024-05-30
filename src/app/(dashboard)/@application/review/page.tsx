import { ReactNode } from 'react';

const Review = (): ReactNode => (
  <>
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold leading-9 text-default-foreground">Review</h1>
      <p className="py-2 text-medium text-default-500 text-center max-w-md">
        Check everything&apos;s correct before you submit! Once your application is submitted, you won&apos;t be able to
        change it.
      </p>
    </div>
    {/* TODO: pull set fields */}
  </>
);

export default Review;
