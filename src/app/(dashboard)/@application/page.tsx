import { redirect } from 'next/navigation';
import { ReactElement } from 'react';

const Application = async (): Promise<ReactElement> => {
  // TODO: determine current step from draft application
  redirect('about');
};

export default Application;
