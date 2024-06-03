'use client';

import { faMoon, faSun } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Tooltip } from '@nextui-org/react';
import cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { ReactNode } from 'react';
import { useMediaQuery } from 'usehooks-ts';

const ThemeSwitcher = (): ReactNode => {
  const { forcedTheme: theme } = useTheme();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const router = useRouter();

  const isDarkMode = theme === 'dark' || (prefersDarkMode && theme !== 'light');
  const nextTheme = isDarkMode ? 'light' : 'dark';

  const onPress = () => {
    cookies.set('theme', nextTheme, { sameSite: 'strict' });
    router.refresh();
  };

  return (
    <Tooltip delay={1000} content={`Switch to ${nextTheme} mode`}>
      <Button isIconOnly variant="light" onPress={onPress}>
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="h-6 text-default-500" />
        <span className="sr-only">Switch to {nextTheme} modes</span>
      </Button>
    </Tooltip>
  );
};

export default ThemeSwitcher;
