/** node modules */
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

/** route */
import { paths } from "../../../app/paths";

/** reusable module */
import { InputIconField, Button } from "../../../shared";

/** validation schema */
import { verifyEmailSchema } from "../../../validation/schema";

/** icons */
import { Email } from "../../../icons";

/** style modules */
import {
  Form,
  AppPageMainText,
  AppInputField,
  InfoText,
  AppButtonField,
  AppPageLink,
  Link,
} from "../style";

/** render element */
export const VerifyEmailPage = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(verifyEmailSchema),
    mode: "onChange",
    defaultValues: { email: "" },
  });

  const onSubmit = (data) => {
    console.log("Submitted data:", data);
    if (data.email === "dipankar@gmail.com") {
      navigate(paths.login);
    } else {
      navigate(paths.register);
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
          loading={isSubmitting}
        >
          {"Continue"}
        </Button>
      </AppButtonField>
    </Form>
  );
};
