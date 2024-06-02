import { z } from 'zod';

export const schema = z
  .object({
    vcsUrl: z.string().url().nullable(),
    portfolioUrl: z.string().url().nullable(),
    devpostUrl: z.string().url().nullable(),
    hackathonsAttended: z.number().min(0).max(50).nullable(),
    shareInformation: z.boolean(),
  })
  .required();

export type Schema = z.infer<typeof schema>;
