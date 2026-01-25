import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Email, Pass } from "../../config/Icons";
import { Password } from "../../shared/Password";
import { Button } from "../../shared/Button";
import { loginSchema } from "../../validation/schema";
import { useLogin } from "../../hooks/useAuth";
import { useToast } from "../../hooks/useToast";
import { useAuthStore } from "../../store/authStore";
import {
  Form,
  AppPageMainText,
  AppInputField,
  AppShowingEmail,
  AppShowingEmailTop,
  AppShowingEmailBottom,
  AppButtonField,
} from "./style";

export const LoginPage = () => {
  const { showToast } = useToast();
  const { isEmail } = useAuthStore();
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
        <Password
          label="Password"
          name="password"
          {...register("password")}
          required
          error={errors.password}
          leftIcon={<Pass />}
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
