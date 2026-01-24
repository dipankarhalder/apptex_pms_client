/** node modules */
import { forwardRef } from "react";
import styled, { css } from "styled-components";

/** styles module */
import { fontSize, fontWeight, borderRadius } from "../../styles";

/** inline styles */
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

const sharedInputStyles = css`
  padding: 10px 14px;
  ${fontSize("14px")}
  ${borderRadius("6px")}
  transition: border-color 0.2s ease, background-color 0.2s ease;
`;

const Input = styled.input`
  ${sharedInputStyles}

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

const ErrorText = styled.span`
  ${fontSize("12px")}
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.red40};
`;

/** render element */
export const InputField = forwardRef(
  (
    {
      label,
      name,
      type = "text",
      error,
      required = false,
      disabled = false,
      ...rest
    },
    ref,
  ) => {
    const inputId = `input-${name}`;
    const errorId = `${inputId}-error`;

    return (
      <FieldWrapper>
        {label && (
          <Label htmlFor={inputId}>
            {label}
            {required && <Required>*</Required>}
          </Label>
        )}

        <Input
          id={inputId}
          name={name}
          type={type}
          disabled={disabled}
          ref={ref}
          $hasError={!!error}
          aria-invalid={!!error}
          aria-required={required}
          aria-describedby={error ? errorId : undefined}
          {...rest}
        />

        {error && <ErrorText id={errorId}>{error.message}</ErrorText>}
      </FieldWrapper>
    );
  },
);

InputField.displayName = "InputField";
