'use client';

import { ReactNode } from 'react';

import { useApplicationStatus } from '@/components/EventProvider/hooks';

const Dashboard = (): ReactNode => {
  const status = useApplicationStatus();

  switch (status) {
    case undefined:
      return <>Unsubmitted</>;

    // TODO: fill in these with actual components

    case 'PENDING':
      return <>Pending...</>;

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
