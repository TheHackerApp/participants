import { PropsWithChildren, ReactElement } from 'react';

import { getClient } from '@/graphql/clients/server';

import { Provider } from './context';
import { EventDocument } from './Event.graphql';

async function EventProvider({ children }: PropsWithChildren): Promise<ReactElement> {
  const client = getClient();
  const { data } = await client.query({ query: EventDocument });

  // TODO: gracefully handle this case
  if (!data.event) throw new Error('event must exist');

  return <Provider value={{ event: data.event, status: data.application?.status }}>{children}</Provider>;
}

export default EventProvider;
