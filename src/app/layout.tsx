import { config } from '@fortawesome/fontawesome-svg-core';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';

import EventProvider from '@/components/EventProvider';
import MaintenanceCard from '@/components/MaintenanceCard';
import Navigation from '@/components/Navigation';
import NextUIProvider from '@/components/NextUIProvider';
import ThemeProvider from '@/components/ThemeProvider';
import { ApolloClientProvider } from '@/graphql/clients/provider';
import { loadEvent } from '@/lib/event';
import { cn } from '@/lib/styles';

import '@fortawesome/fontawesome-svg-core/styles.css';
import './tailwind.css';

const inter = Inter({ subsets: ['latin'] });
config.autoAddCss = false;

const MAINTENANCE = (process.env.MAINTENANCE ?? '').toLowerCase().charAt(0) == 't';

export async function generateMetadata(): Promise<Metadata> {
  if (MAINTENANCE) return { title: 'System under maintenance' };

  const { name } = await loadEvent();

  return {
    title: {
      template: `${name} - %s`,
      default: name,
    },
    description: `The application portal for ${name}`,
  };
}

export default function RootLayout({ children }: PropsWithChildren) {
  const content = MAINTENANCE ? (
    <MaintenanceCard />
  ) : (
    <EventProvider>
      <Navigation />
      {children}
      <Toaster position="top-right" toastOptions={{ className: 'toast' }} />
    </EventProvider>
  );

  return (
    <html lang="en">
      <body className={cn(inter.className, 'h-dvh')}>
        <ApolloClientProvider>
          <NextUIProvider>
            <ThemeProvider>{content}</ThemeProvider>
          </NextUIProvider>
        </ApolloClientProvider>
      </body>
    </html>
  );
}
