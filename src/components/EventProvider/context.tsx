'use client';

import { PropsWithChildren, ReactNode, createContext, useContext } from 'react';

import type { Event } from '@/graphql';

type Data = Pick<Event, 'slug' | 'name' | 'active'>;

const EventContext = createContext<Data>({
  slug: '',
  name: '',
  active: false,
});

export const useEvent = (): Data => useContext(EventContext);

interface Props {
  value: Data;
}

export const Provider = ({ value, children }: PropsWithChildren<Props>): ReactNode => (
  <EventContext.Provider value={value}>{children}</EventContext.Provider>
);
