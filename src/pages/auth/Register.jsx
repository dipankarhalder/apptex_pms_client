import { useNavigate } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Email, Pass } from "../../components/common/Icons";
import { paths } from "../../config/paths";
import { Input } from "../../shared/Input";
import { Password } from "../../shared/Password";
import { Button } from "../../shared/Button";
import { PassRules } from "../../components/auth/PassRules";
import { registerSchema } from "../../validation/schema";
import { useToast } from "../../hooks/useToast";
import { useRegister } from "../../hooks/useAuth";
import { useAuthStore } from "../../store/authStore";
import {
  Form,
  AppPageMainText,
  AppInputField,
  AppShowingEmail,
  AppShowingEmailTop,
  AppShowingEmailBottom,
  AppHalfField,
  AppButtonField,
} from "./style";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { isEmail } = useAuthStore();
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

  const pass_value = useWatch({
    name: "password",
    control,
  });

  const showErrorToast = (err) => {
    const title = err?.response?.statusText || "Error";
    const description =
      err?.response?.data?.message || err?.message || "Something went wrong";
    showToast({ type: "error", title, description });
  };

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
      navigate(paths.verifiEmail);
    } catch (err) {
      showErrorToast(err);
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
          <Input
            label="First Name"
            name="firstName"
            type="text"
            {...register("firstName")}
            required
            error={errors.firstName}
          />
          <Input
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
        <Password
          label="Password"
          name="password"
          {...register("password")}
          required
          error={errors.password}
          leftIcon={<Pass />}
        />
        <PassRules password={pass_value} />
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
