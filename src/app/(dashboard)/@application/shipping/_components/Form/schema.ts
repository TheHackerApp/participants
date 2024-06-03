import { z } from 'zod';

export const schema = z
  .object({
    addressLine1: z.string().nullable(),
    addressLine2: z.string().nullable(),
    addressLine3: z.string().nullable(),
    locality: z.string().nullable(),
    administrativeArea: z.string().nullable(),
    postalCode: z.string().nullable(),
    country: z.string().nullable(),
  })
  .required();

export type Schema = z.infer<typeof schema>;
