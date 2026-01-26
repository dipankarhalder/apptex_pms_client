import * as yup from "yup";

export const emailSchema = yup.object({
  email: yup
    .string()
    .trim()
    .required("Please enter your email address.")
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
      "Please enter a valid email address (e.g., example@gmail.com).",
    ),
});

export const loginSchema = yup.object({
  password: yup
    .string()
    .trim()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "At least 1 uppercase letter")
    .matches(/[a-z]/, "At least 1 lowercase letter")
    .matches(/[0-9]/, "At least 1 number"),
});

export const registerSchema = yup.object().shape({
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

export const addCompanySchema = yup.object().shape({
  name: yup.string().required("Company name is required"),
  code: yup.string().required("Company code is required"),
  type: yup.string().required("Company type is required").nullable(false),
});
