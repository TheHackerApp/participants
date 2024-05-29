'use client';

import { NavbarBrand, NavbarMenuToggle } from '@nextui-org/react';
import { ReactNode } from 'react';

import { useEvent } from '@/components/EventProvider/hooks';

interface Props {
  wasAccepted: boolean;
}

const Brand = ({ wasAccepted }: Props): ReactNode => {
  const { name } = useEvent();

  return (
    <NavbarBrand>
      {wasAccepted && <NavbarMenuToggle className="mr-2 h-6 sm:hidden" />}
      <p className="font-bold text-inherit">{name}</p>
    </NavbarBrand>
  );
};

export default Brand;
