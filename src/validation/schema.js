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

export const verifyRegisterSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Minimum 8 characters")
    .matches(/[A-Z]/, "At least 1 uppercase letter")
    .matches(/[a-z]/, "At least 1 lowercase letter")
    .matches(/[0-9]/, "At least 1 number")
    .matches(
      /[@$!%*?&#^()_+\-=[\]{};':"\\|,.<>/?]/,
      "At least 1 special character",
    ),
});
