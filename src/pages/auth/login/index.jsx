/** node modules */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

/** reusable module */
import { PasswordIcon, Button } from "../../../shared";

/** validation schema */
import { verifyEmailSchema } from "../../../validation/schema";

/** icons */
import { Email, Password } from "../../../icons";

/** style modules */
import {
  Form,
  AppPageMainText,
  AppInputField,
  AppShowingEmail,
  AppShowingEmailTop,
  AppShowingEmailBottom,
  AppButtonField,
} from "../style";

/** render element */
export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(verifyEmailSchema),
    mode: "onChange",
    defaultValues: { password: "" },
  });

  const onSubmit = (data) => {
    console.log("Submitted data:", data);
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
            <p>dipappdev@gmail.com</p>
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
          loading={isSubmitting}
        >
          {"Login to access"}
        </Button>
      </AppButtonField>
    </Form>
  );
};
