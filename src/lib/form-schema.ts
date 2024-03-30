import * as z from "zod";

export const profileSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Product Name must be at least 3 characters" }),
  email: z
    .string()
    .email({ message: "Product Name must be at least 3 characters" }),
  contactno: z.coerce.number(),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, {
      message: "Password should have at least 8 characters",
    })
    .max(15, {
      message: "Password should not exceed 15 characters",
    }),
  confirmPassword: z
    .string({
      required_error: "Password is required",
    })
    .min(8, {
      message: "Password should have at least 8 characters",
    })
    .max(15, {
      message: "Password should not exceed 15 characters",
    }),
  dob: z.string().refine((value) => /^\d{4}-\d{2}-\d{2}$/.test(value), {
    message: "Start date should be in the format YYYY-MM-DD",
  }),
  address: z.array(
    z.object({
      country: z.string().min(1, { message: "Please select a category" }),
      city: z.string().min(1, { message: "Please select a category" }),
      district: z.string().min(1, { message: "Please select a category" }),
      state: z.string().min(1, { message: "Please select a category" }),
      street: z
        .string()
        .min(3, { message: "Product Name must be at least 3 characters" }),
      pincode: z
        .string()
        .min(3, { message: "Product Name must be at least 3 characters" }),
    }),
  ),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
