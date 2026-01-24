/** node modules */
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

/** reusable module */
import { InputField, PasswordIcon, Button } from "../../../shared";
import { PasswordRules } from "../../../components/PasswordRule";

/** validation schema */
import { verifyRegisterSchema } from "../../../validation/schema";

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
  AppHalfField,
  AppButtonField,
} from "../style";

/** render element */
export const RegisterPage = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(verifyRegisterSchema),
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

  const onSubmit = (data) => {
    console.log("Submitted data:", data);
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
            <p>dipappdev@gmail.com</p>
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
          loading={isSubmitting}
        >
          {"Create an account"}
        </Button>
      </AppButtonField>
    </Form>
  );
};
