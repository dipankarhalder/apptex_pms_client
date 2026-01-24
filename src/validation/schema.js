import * as yup from "yup";

export const verifyEmailSchema = yup.object({
  email: yup
    .string()
    .trim()
    .required("Please enter your email address.")
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
      "Please enter a valid email address (e.g., example@gmail.com).",
    ),
});
