import { forwardRef, useState } from "react";
import styled, { css } from "styled-components";
import { fontSize, fontWeight, borderRadius } from "../styles/mixins";

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Label = styled.label`
  ${fontSize("14px")}
  ${fontWeight("500")}
  margin-bottom: 6px;
  color: ${({ theme }) => theme.colors.bodytext};
`;

const Required = styled.span`
  margin-left: 4px;
  color: ${({ theme }) => theme.colors.red40};
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const LeftIconWrapper = styled.span`
  position: absolute;
  left: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.gray50};

  & > svg {
    width: 20px;
    height: 20px;
  }
`;

const sharedInputStyles = css`
  width: 100%;
  padding: ${({ $hasIcon }) =>
    $hasIcon ? "10px 44px 10px 50px" : "10px 44px 10px 14px"};

  ${fontSize("14px")}
  ${borderRadius("6px")}

  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;

  border: 1px solid
    ${({ $hasError, theme }) =>
      $hasError ? theme.colors.red40 : theme.colors.inputborder};

  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.disabledBg : theme.colors.white};

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};

  &:focus-visible {
    outline: none;
    border-color: ${({ $hasError, theme }) =>
      $hasError ? theme.colors.red40 : theme.colors.blue50};
  }

  &:disabled {
    opacity: 0.7;
  }
`;

const Input = styled.input`
  ${sharedInputStyles}
`;

const ToggleButton = styled.button`
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  ${fontSize("12px")}
  color: ${({ theme }) => theme.colors.blue40};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const ErrorText = styled.span`
  ${fontSize("12px")}
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.red40};
`;

export const Password = forwardRef(
  (
    {
      label,
      name,
      error,
      required = false,
      disabled = false,
      leftIcon,
      ...rest
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const inputId = `password-${name}`;
    const errorId = `${inputId}-error`;
    const hasIcon = Boolean(leftIcon);

    return (
      <FieldWrapper>
        {label && (
          <Label htmlFor={inputId}>
            {label}
            {required && <Required>*</Required>}
          </Label>
        )}

        <InputWrapper>
          {hasIcon && <LeftIconWrapper>{leftIcon}</LeftIconWrapper>}

          <Input
            id={inputId}
            name={name}
            type={showPassword ? "text" : "password"}
            ref={ref}
            disabled={disabled}
            $hasError={!!error}
            $hasIcon={hasIcon}
            aria-required={required}
            aria-invalid={!!error || undefined}
            aria-describedby={error ? errorId : undefined}
            {...rest}
          />

          <ToggleButton
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            disabled={disabled}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? "Hide" : "Show"}
          </ToggleButton>
        </InputWrapper>

        {error && <ErrorText id={errorId}>{error.message}</ErrorText>}
      </FieldWrapper>
    );
  },
);

Password.displayName = "Password";
