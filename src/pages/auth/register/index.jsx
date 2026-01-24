import { useContext } from "react";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Email, Password } from "../../../icons";
import { InputField, PasswordIcon, Button } from "../../../shared";
import { PasswordRules } from "../../../components/passwordRule";
import { registerSchema } from "../../../validation/schema";
import { useRegister } from "../../../hooks/useAuth";
import { useAuthStore } from "../../../store/authStore";
import { ToastContext } from "../../../shared/toast/toastContext";
import {
  Form,
  AppPageMainText,
  AppInputField,
  AppShowingEmail,
  AppShowingEmailTop,
  AppShowingEmailBottom,
  AppHalfField,
  AppButtonField,
} from "../style";

export const RegisterPage = () => {
  const { isEmail } = useAuthStore();
  const { showToast } = useContext(ToastContext);
  const { mutateAsync, isPending } = useRegister();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(registerSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      password: "",
    },
  });

  const passwordValue = useWatch({
    name: "password",
    control,
  });

  const onSubmit = async (data) => {
    try {
      const res = await mutateAsync({
        email: isEmail,
        firstName: data.firstName,
        lastName: data.lastName,
        password: data.password,
      });
      showToast({
        type: "success",
        title: "Successfully user created",
        description: res.message,
      });
    } catch (err) {
      const title = err?.response?.statusText || "Error";
      const description =
        err?.response?.data?.message || err?.message || "Something went wrong";

      showToast({
        type: "error",
        title,
        description: JSON.stringify(description),
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} noValidate>
      <AppPageMainText>
        <h1>Get started</h1>
        <p>Create an account to access the application</p>
      </AppPageMainText>
      <AppInputField>
        <AppShowingEmail>
          <AppShowingEmailTop>
            <p>Your email address</p>
          </AppShowingEmailTop>
          <AppShowingEmailBottom>
            <Email />
            <p>{isEmail}</p>
          </AppShowingEmailBottom>
        </AppShowingEmail>
      </AppInputField>
      <AppInputField>
        <AppHalfField>
          <InputField
            label="First Name"
            name="firstName"
            type="text"
            {...register("firstName")}
            required
            error={errors.firstName}
          />
          <InputField
            label="Last Name"
            name="lastName"
            type="text"
            {...register("lastName")}
            required
            error={errors.lastName}
          />
        </AppHalfField>
      </AppInputField>
      <AppInputField>
        <PasswordIcon
          label="Password"
          name="password"
          {...register("password")}
          required
          error={errors.password}
          leftIcon={<Password />}
        />
        <PasswordRules password={passwordValue} />
      </AppInputField>
      <AppButtonField>
        <Button
          type="submit"
          fullWidth
          disabled={isSubmitting || !!errors.email}
          loading={isPending}
        >
          Create an account
        </Button>
      </AppButtonField>
    </Form>
  );
};
