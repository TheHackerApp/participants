'use client';

import { ReactNode } from 'react';

import { useApplicationStatus } from '@/components/EventProvider/hooks';

interface Props {
  application: ReactNode;
  pending: ReactNode;
}

const Dashboard = ({ application, pending }: Props): ReactNode => {
  const status = useApplicationStatus();

  switch (status) {
    case undefined:
      return application;

    // TODO: fill in these with actual components

    case 'PENDING':
      return pending;

    case 'ACCEPTED':
      return <>Accepted</>;

    case 'REJECTED':
      return <>Rejected</>;

    case 'WAITLISTED':
      return <>Waitlisted</>;

    default:
      throw new Error('unknown event status');
  }
};

export default Dashboard;
