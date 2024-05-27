'use client';

import { PropsWithChildren, ReactNode, createContext, useContext } from 'react';

import type { Event } from '@/graphql';
import { ApplicationStatus } from '@/graphql';

type EventData = Pick<Event, 'slug' | 'name' | 'active'>;

interface Data {
  event: EventData;
  status?: ApplicationStatus;
}

const EventContext = createContext<Data>({
  event: { slug: '', name: '', active: false },
});

export const useEvent = (): EventData => {
  const context = useContext(EventContext);
  return context.event;
};

export const useApplicationStatus = (): ApplicationStatus | undefined => {
  const context = useContext(EventContext);
  return context.status;
};

interface Props {
  value: Data;
}

export const Provider = ({ value, children }: PropsWithChildren<Props>): ReactNode => (
  <EventContext.Provider value={value}>{children}</EventContext.Provider>
);
