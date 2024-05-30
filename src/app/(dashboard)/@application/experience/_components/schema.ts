import { z } from 'zod';

export const schema = z
  .object({
    links: z.string().array(),
    hackathonsAttended: z.number().min(0).max(50).nullable(),
    shareInformation: z.boolean(),
  })
  .required();

export const defaults: z.infer<typeof schema> = {
  links: [],
  hackathonsAttended: null,
  shareInformation: true,
};
