import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Email } from "../../config/Icons";
import { paths } from "../../routers/paths";
import { Input } from "../../shared/Input";
import { Button } from "../../shared/Button";
import { emailSchema } from "../../validation/schema";
import { useToast } from "../../hooks/useToast";
import { useFindEmail } from "../../hooks/useAuth";
import { useAuthStore } from "../../store/authStore";
import {
  Form,
  AppPageMainText,
  AppInputField,
  InfoText,
  AppButtonField,
  AppPageLink,
  Link,
} from "./style";

export const VerifyEmailPage = () => {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { setEmail } = useAuthStore();
  const { mutateAsync, isPending } = useFindEmail();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(emailSchema),
    mode: "onChange",
    defaultValues: { email: "" },
  });

  const onSubmit = async (data) => {
    try {
      const res = await mutateAsync({ email: data.email });
      setEmail(data.email);
      navigate(paths.login);

      showToast({
        type: "success",
        title: "Successfully email verified",
        description: res.message,
      });
    } catch (err) {
      const title = err?.response?.statusText || "Error";
      const description =
        err?.response?.data?.message || err?.message || "Something went wrong";

      if (err?.status === 400) {
        setEmail(data.email);
        navigate(paths.register);
      }

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
        <h1>Sign in to your account</h1>
        <p>Continue your session by logging in</p>
      </AppPageMainText>
      <AppInputField>
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="example@gmail.com"
          {...register("email")}
          required
          error={errors.email}
          leftIcon={<Email />}
        />
        <InfoText>
          <p>
            You may use either your personal or official email address to sign
            in or register a new uesr.
          </p>
        </InfoText>
      </AppInputField>
      <AppPageLink>
        <Link to="/">Forgot password?</Link>
      </AppPageLink>
      <AppButtonField>
        <Button
          type="submit"
          fullWidth
          disabled={isSubmitting || !!errors.email}
          loading={isPending}
        >
          Continue
        </Button>
      </AppButtonField>
    </Form>
  );
};
