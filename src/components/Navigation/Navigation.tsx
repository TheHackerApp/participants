import { faArrowRightFromBracket, faSliders } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Link, Navbar, NavbarContent, NavbarItem, Tooltip } from '@nextui-org/react';
import dynamic from 'next/dynamic';
import { ReactElement } from 'react';

import { getClient } from '@/graphql/clients/server';

import Brand from './_components/Brand';
import Links from './_components/Links';
import { NavigationDocument } from './Navigation.graphql';

const ThemeSwitcher = dynamic(() => import('./_components/ThemeSwitcher'), { ssr: false });

async function Navigation(): Promise<ReactElement> {
  const client = getClient();
  const { data } = await client.query({ query: NavigationDocument });

  const wasAccepted = data.application?.status === 'ACCEPTED';

  return (
    <Navbar
      classNames={{
        base: 'lg:bg-transparent lg:backdrop-filter-none',
        item: 'data-[active=true]:text-primary',
        wrapper: 'px-4 sm:px-6',
      }}
      height="60px"
    >
      <Brand wasAccepted={wasAccepted} />
      {wasAccepted && <Links />}
      <NavbarContent
        className="ml-auto flex h-12 max-w-fit items-center gap-0 rounded-full p-0 lg:bg-content1 lg:px-1"
        justify="end"
      >
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <Tooltip content="Settings">
            <Button as={Link} href={process.env.NEXT_PUBLIC_ACCOUNTS_URL + '/settings'} isIconOnly variant="light">
              <FontAwesomeIcon icon={faSliders} className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Button>
          </Tooltip>
        </NavbarItem>
        <NavbarItem>
          <Tooltip content="Log out">
            <Button as={Link} href={process.env.NEXT_PUBLIC_API_URL + '/oauth/logout'} isIconOnly variant="light">
              <FontAwesomeIcon icon={faArrowRightFromBracket} className="h-5 w-5" />
              <span className="sr-only">Log out</span>
            </Button>
          </Tooltip>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default Navigation;
