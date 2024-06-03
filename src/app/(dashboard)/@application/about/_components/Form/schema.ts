import { z } from 'zod';

import { Gender, RaceEthnicity } from '@/graphql';

export const schema = z
  .object({
    gender: z.nativeEnum(Gender, { message: 'Missing or invalid gender' }).nullable(),
    raceEthnicity: z.nativeEnum(RaceEthnicity, { message: 'Missing or invalid race/ethnicity' }).nullable(),
    dateOfBirth: z.string().date().nullable(),
  })
  .required();

export type Schema = z.infer<typeof schema>;