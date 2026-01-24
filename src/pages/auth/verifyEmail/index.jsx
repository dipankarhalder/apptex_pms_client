/** node modules */
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";

/** reusable module */
import { InputIconField, Button } from "../../../Shared";

/** validation schema */
import { verifyEmailSchema } from "../../../validation/schema";

/** icons */
import { Email } from "../../../icons";
import { fontSize } from "../../../styles";

/** inline style */
const Form = styled.form`
  width: 350px;
  display: flex;
  flex-direction: column;
`;

const AppInputField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 14px;
`;

const InfoText = styled.p`
  ${fontSize("12px")}
  line-height: normal;
  color: ${({ theme }) => theme.colors.gray60};
`;

const AppButtonField = styled.div`
  margin-top: 12px;
`;

/** render element */
export const VerifyEmailPage = () => {
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
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} noValidate>
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
          You may use either your personal or official email address to sign in
          or register a new uesr.
        </InfoText>
      </AppInputField>
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
