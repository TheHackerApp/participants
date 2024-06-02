import { getClient } from '@/graphql/clients/server';

import { EventDetailsDocument } from './EventDetails.graphql';

interface Event {
  slug: string;
  name: string;
}

export async function loadEvent(): Promise<Event> {
  const client = getClient();
  const { data } = await client.query({ query: EventDetailsDocument });

  // The event is known to exist at this point due to verification occurring in the middleware
  if (!data.event) throw new Error('event must exist');

  return data.event;
}
