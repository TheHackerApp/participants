import { Link, NavbarContent, NavbarItem } from '@nextui-org/react';
import { ReactNode } from 'react';

const Links = (): ReactNode => (
  <NavbarContent
    className="ml-4 hidden h-12 w-full max-w-fit gap-4 rounded-full bg-content1 px-4 sm:flex"
    justify="start"
  >
    <NavbarItem>
      <Link className="flex gap-2 text-inherit" href="#">
        Dashboard
      </Link>
    </NavbarItem>
  </NavbarContent>
);

export default Links;
