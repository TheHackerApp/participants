import { Autocomplete, AutocompleteItem, AutocompleteProps } from '@nextui-org/react';
import type { Hit as AlgoliaHit } from 'instantsearch.js';
import debounce from 'lodash.debounce';
import { Key, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { useFormStatus } from 'react-dom';
import { useController } from 'react-hook-form';
import type { Control, ControllerRenderProps, FieldPathByValue, FieldValues } from 'react-hook-form';
import { Highlight, useHits, useInstantSearch, useSearchBox } from 'react-instantsearch';

import InstantSearchProvider, { searchClient } from '@/components/InstantSearchProvider';

type Props<TFieldValues extends FieldValues, TPath extends FieldPathByValue<TFieldValues, string | null>> = Omit<
  AutocompleteProps,
  | keyof ControllerRenderProps
  | 'selectedKey'
  | 'onSelectionChange'
  | 'isRequired'
  | 'isLoading'
  | 'form'
  | 'children'
  | 'items'
  | 'defaultItems'
  | 'inputValue'
  | 'onInputChange'
  | 'defaultSelectedKey'
> & {
  control: Control<TFieldValues>;
  name: TPath;
  label: string;
};

type Hit = Pick<AlgoliaHit, 'objectID'> &
  Partial<Omit<AlgoliaHit, 'objectID'>> & {
    name: string;
  };

const AutoCompleteSelect = <
  TFieldValues extends FieldValues,
  TPath extends FieldPathByValue<TFieldValues, string | null>,
>({
  control,
  name,
  label,
  required,
  ...rest
}: Props<TFieldValues, TPath>): ReactNode => {
  const {
    field: { value: initialValue, onChange: onFieldChange, onBlur },
    fieldState: { invalid, error },
  } = useController({ name, control, rules: { required } });
  const { pending } = useFormStatus();

  const [query, setQuery] = useState('');
  const [value, setValue] = useState<string | null>(initialValue);
  const [selected, setSelected] = useState<Hit>();

  useEffect(() => {
    if (!value) return;

    const index = searchClient.initIndex('schools');
    index.getObject<Hit>(value).then((hit) => {
      setQuery(hit.name);
      setSelected(hit);
    });
  }, [value]);

  const { status } = useInstantSearch();
  const { refine } = useSearchBox();
  const { items } = useHits<Hit>();

  const debouncedRefine = useMemo(() => debounce(refine, 300), [refine]);
  const onInputChange = useCallback(
    (query: string) => {
      setQuery(query);
      debouncedRefine(query);
    },
    [setQuery, debouncedRefine],
  );

  const onSelectionChange = useCallback(
    (key: Key) => {
      onFieldChange(key);
      setValue(key.toString());
    },
    [onFieldChange, setValue],
  );

  const renderedItems = useMemo(() => {
    const combined = [selected, ...items].filter((item) => typeof item !== 'undefined') as Hit[];
    const unique = new Map(combined.map((item) => [item.objectID, item]));
    return [...unique.values()];
  }, [selected, items]);

  return (
    <Autocomplete
      items={renderedItems}
      inputValue={query}
      onInputChange={onInputChange}
      selectedKey={value}
      onSelectionChange={onSelectionChange}
      label={label}
      isLoading={status === 'loading' || status === 'stalled'}
      isDisabled={pending}
      isRequired={required}
      isInvalid={invalid}
      errorMessage={error?.message}
      menuTrigger="input"
      onBlur={onBlur}
      {...rest}
    >
      {(hit) => (
        <AutocompleteItem key={hit.objectID} textValue={hit.name}>
          {isHighlightable(hit) ? <Highlight hit={hit} attribute="name" /> : hit.name}
        </AutocompleteItem>
      )}
    </Autocomplete>
  );
};

const isHighlightable = (hit: Hit): hit is AlgoliaHit<Hit> => typeof hit.__position !== 'undefined';

type WrapperProps<
  TFieldValues extends FieldValues,
  TPath extends FieldPathByValue<TFieldValues, string | null>,
> = Props<TFieldValues, TPath> & { index: string };

const Wrapper = <TFieldValues extends FieldValues, TPath extends FieldPathByValue<TFieldValues, string | null>>({
  index,
  ...props
}: WrapperProps<TFieldValues, TPath>): ReactNode => (
  <InstantSearchProvider index={index}>
    <AutoCompleteSelect {...props} />
  </InstantSearchProvider>
);

export default Wrapper;
