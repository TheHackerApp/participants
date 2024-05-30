import { ReactNode, Suspense } from 'react';

import Name from './Name';
import Placeholder from './Placeholder';

const Component = (): ReactNode => (
  <Suspense fallback={<Placeholder />}>
    <Name />
  </Suspense>
);

export default Component;
