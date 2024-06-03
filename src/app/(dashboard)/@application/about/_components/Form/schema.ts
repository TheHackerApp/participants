import { z } from 'zod';

import { Gender, RaceEthnicity, Referrer } from '@/graphql';

export const schema = z
  .object({
    gender: z.nativeEnum(Gender, { message: 'Missing or invalid gender' }).nullable(),
    raceEthnicity: z.nativeEnum(RaceEthnicity, { message: 'Missing or invalid race/ethnicity' }).nullable(),
    dateOfBirth: z.string().date().nullable(),
    referrer: z.nativeEnum(Referrer, { message: 'Invalid referrer.' }).nullable(),
  })
  .required();

export type Schema = z.infer<typeof schema>;
