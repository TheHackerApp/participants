import algoliasearch from 'algoliasearch';
import { PropsWithChildren, ReactNode } from 'react';
import { InstantSearch } from 'react-instantsearch';

export const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY!,
);

interface Props {
  index: string;
}

const InstantSearchProvider = ({ index, children }: PropsWithChildren<Props>): ReactNode => (
  <InstantSearch searchClient={searchClient} indexName={index}>
    {children}
  </InstantSearch>
);

export default InstantSearchProvider;
