import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import { paths } from "../../../app/paths";
import { InputIconField, Button } from "../../../shared";
import { verifyEmailSchema } from "../../../validation/schema";
import { Email } from "../../../icons";
import { useFindEmail } from "../../../hooks/useAuth";
import { ToastContext } from "../../../shared/toast/toastContext";

import {
  Form,
  AppPageMainText,
  AppInputField,
  InfoText,
  AppButtonField,
  AppPageLink,
  Link,
} from "../style";

export const VerifyEmailPage = () => {
  // const navigate = useNavigate();
  const toast = useContext(ToastContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(verifyEmailSchema),
    mode: "onChange",
    defaultValues: { email: "" },
  });

  const { showToast } = toast;
  const { mutateAsync, isPending } = useFindEmail();
  const onSubmit = async (data) => {
    try {
      const res = await mutateAsync({ email: data.email });
      console.log(res);
      showToast({
        type: "success",
        title: "Successfully email verified",
        description: res.message,
      });
    } catch (err) {
      showToast({
        type: "error",
        title: err.response.statusText,
        description: JSON.stringify(err.response.data.message),
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
        <InputIconField
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
          {"Continue"}
        </Button>
      </AppButtonField>
    </Form>
  );
};
