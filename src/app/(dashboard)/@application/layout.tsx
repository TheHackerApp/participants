import { PropsWithChildren, ReactNode } from 'react';

import MultiStepForm from './_components/MultiStepForm';

const Layout = ({ children }: PropsWithChildren): ReactNode => (
  <MultiStepForm
    steps={[
      { title: 'About You', description: 'Tell us about yourself' },
      { title: 'Education', description: 'Tell us about your education' },
      { title: 'Experience', description: 'What have you worked on?' },
      { title: 'Shipping', description: 'Your current mailing address' },
      { title: 'Review', description: "Check everything's correct!" },
    ]}
  >
    {children}
  </MultiStepForm>
);

export default Layout;
