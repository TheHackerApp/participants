import { PropsWithChildren, ReactNode } from 'react';

import MultiStepForm from './_components/MultiStepForm';

const Layout = ({ children }: PropsWithChildren): ReactNode => (
  <MultiStepForm
    steps={[
      { title: 'About You', description: 'Tell us about yourself', path: '/about' },
      { title: 'Education', description: 'Tell us about your education', path: '/education' },
      { title: 'Experience', description: 'What have you worked on?', path: '/experience' },
      { title: 'Shipping', description: 'Your current mailing address', path: '/shipping' },
      { title: 'Review', description: "Check everything's correct!", path: '/review' },
    ]}
  >
    {children}
  </MultiStepForm>
);

export default Layout;
