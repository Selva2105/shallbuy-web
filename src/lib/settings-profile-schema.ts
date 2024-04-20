import * as z from "zod";

export const settingsProfileSchema = z.object({
  username: z
    .string({
      required_error: "Username is required",
    })
    .min(3, { message: "Username must be at least 3 characters" })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Username can only contain letters, numbers, and underscores",
    }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({ message: "Invalid email format" }),
  contactno: z
    .string({
      required_error: "Contact number is required",
    })
    .refine((value) => /^[0-9]{10}$/.test(value), {
      message: "Contact number must contain exactly 10 digits",
    }),
  dateOfBirth: z.string().refine((value) => /^\d{4}-\d{2}-\d{2}$/.test(value), {
    message: "Date of birth should be in the format YYYY-MM-DD",
  }),
});

export type SettingsProfileFormValues = z.infer<typeof settingsProfileSchema>;
