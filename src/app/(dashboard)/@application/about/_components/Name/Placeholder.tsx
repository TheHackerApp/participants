import { Input, Spinner } from '@nextui-org/react';
import { ReactNode } from 'react';

const Placeholder = (): ReactNode => (
  <>
    <Input
      className="col-span-12 md:col-span-6"
      type="text"
      label="Given name"
      startContent={<Spinner size="sm" />}
      isReadOnly
      isDisabled
      value=" "
    />
    <Input
      className="col-span-12 md:col-span-6"
      type="text"
      label="Family name"
      startContent={<Spinner size="sm" />}
      isReadOnly
      isDisabled
      value=" "
    />
  </>
);

export default Placeholder;
