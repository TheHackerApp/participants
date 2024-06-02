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

export const defaults: z.infer<typeof schema> = {
  vcsUrl: null,
  portfolioUrl: null,
  devpostUrl: null,
  hackathonsAttended: null,
  shareInformation: true,
};
