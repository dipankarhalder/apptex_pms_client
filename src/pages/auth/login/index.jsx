import { useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Email, Password } from "../../../icons";
import { PasswordIcon, Button } from "../../../shared";
import { loginSchema } from "../../../validation/schema";
import { useLogin } from "../../../hooks/useAuth";
import { useAuthStore } from "../../../store/authStore";
import { ToastContext } from "../../../shared/toast/toastContext";
import {
  Form,
  AppPageMainText,
  AppInputField,
  AppShowingEmail,
  AppShowingEmailTop,
  AppShowingEmailBottom,
  AppButtonField,
} from "../style";

export const LoginPage = () => {
  const { isEmail } = useAuthStore();
  const { showToast } = useContext(ToastContext);
  const { mutateAsync, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onChange",
    defaultValues: { password: "" },
  });

  const onSubmit = async (data) => {
    try {
      const res = await mutateAsync({
        email: isEmail,
        password: data.password,
      });
      showToast({
        type: "success",
        title: "Successfully logged-in",
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
        <h1>Confirm your password</h1>
        <p>Please enter your password to proceed</p>
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
        <PasswordIcon
          label="Password"
          name="password"
          {...register("password")}
          required
          error={errors.password}
          leftIcon={<Password />}
        />
      </AppInputField>
      <AppButtonField>
        <Button
          type="submit"
          fullWidth
          disabled={isSubmitting || !!errors.email}
          loading={isPending}
        >
          Login to access
        </Button>
      </AppButtonField>
    </Form>
  );
};
