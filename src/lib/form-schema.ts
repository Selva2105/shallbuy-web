import * as z from "zod";

export const profileSchema = z
  .object({
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
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(8, {
        message: "Password should have at least 8 characters",
      })
      .max(15, {
        message: "Password should not exceed 15 characters",
      })
      .regex(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{:;'?/><.,])(?=.*[^\w\d\s]).{8,15}$/,
        {
          message:
            "Password should contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be 8-15 characters long",
        },
      ),

    confirmPassword: z
      .string({
        required_error: "Confirm password is required",
      })
      .min(1, {
        message: "Confirm password is required",
      }),
    dateOfBirth: z
      .string()
      .refine((value) => /^\d{4}-\d{2}-\d{2}$/.test(value), {
        message: "Date of birth should be in the format YYYY-MM-DD",
      }),
    addresses: z.array(
      z.object({
        country: z.string().min(1, { message: "Please select a country" }),
        city: z.string().min(1, { message: "Please select a city" }),
        state: z.string().min(1, { message: "Please select a state" }),
        street: z
          .string()
          .min(3, { message: "Street must be at least 3 characters" }),
        pincode: z.string().min(6, { message: "Pincode must be at 6 digit" }),
      }),
    ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type ProfileFormValues = z.infer<typeof profileSchema>;
