import { z } from 'zod';

const pattern =
    /^(%|ppm|ppb|(?:µ?[a-zA-Z]{1,4}[0-9]{0,3}|°[CF]))(?:[/*·](?:µ?[a-zA-Z]{1,4}[0-9]{0,3}|°[CF]))*$/;

export const unitSchema = z
    .string()
    .regex(pattern, { message: 'Invalid UCUM unit' })
    .brand<'Unit'>();

export type Unit = z.infer<typeof unitSchema>;