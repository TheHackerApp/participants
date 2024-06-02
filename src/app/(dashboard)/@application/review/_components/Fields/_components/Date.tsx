'use client';

import { DateFormatter, getLocalTimeZone, parseDate } from '@internationalized/date';
import { ReactNode } from 'react';

interface Props {
  value: string;
}

const Date = ({ value }: Props): ReactNode => {
  const date = parseDate(value).toDate(getLocalTimeZone());

  const language = typeof window !== 'undefined' ? window.navigator.language : 'en';
  return new DateFormatter(language, { dateStyle: 'long' }).format(date);
};

export default Date;
