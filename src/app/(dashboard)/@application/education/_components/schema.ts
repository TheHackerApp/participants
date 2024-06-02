import { z } from 'zod';

import { Education } from '@/graphql';

export const schema = z
  .object({
    education: z.nativeEnum(Education, { message: 'Missing or invalid education' }).nullable(),
    graduationYear: z.number().gt(1950, 'Must be greater than 1950').lt(2100, 'Must be less than 2100').nullable(),
    major: z.string().trim().min(1, 'Too short (less than 1 character)').nullable(),
  })
  .required();

export type Schema = z.infer<typeof schema>;
