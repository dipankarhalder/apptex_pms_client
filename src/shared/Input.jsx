import { forwardRef } from "react";
import styled, { css } from "styled-components";
import { fontSize, fontWeight, borderRadius } from "../styles/mixins";

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const Label = styled.label`
  ${fontSize("13px")}
  ${fontWeight("500")}
  margin-bottom: 6px;
  color: ${({ theme }) => theme.colors.gray30};
`;

const Required = styled.span`
  margin-left: 4px;
  color: ${({ theme }) => theme.colors.red40};
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.span`
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
    $hasIcon ? "10px 14px 10px 50px" : "10px 14px"};

  ${fontSize("14px")}
  ${borderRadius("6px")}

  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "text")};

  border: 1px solid
    ${({ $hasError, theme }) =>
      $hasError ? theme.colors.red40 : theme.colors.inputborder};

  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.disabledBg : theme.colors.white};

  &:focus-visible {
    outline: none;
    border-color: ${({ $hasError, theme }) =>
      $hasError ? theme.colors.red40 : theme.colors.themeBtn};
  }

  &:disabled {
    opacity: 0.7;
  }
`;

const InputElement = styled.input`
  ${sharedInputStyles}
`;

const ErrorText = styled.span`
  ${fontSize("12px")}
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.red40};
`;

export const Input = forwardRef(
  (
    {
      label,
      name,
      type = "text",
      error,
      required = false,
      disabled = false,
      leftIcon,
      ...rest
    },
    ref,
  ) => {
    const inputId = `input-${name}`;
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

        <InputContainer>
          {hasIcon && <IconWrapper>{leftIcon}</IconWrapper>}

          <InputElement
            id={inputId}
            name={name}
            type={type}
            ref={ref}
            disabled={disabled}
            $hasIcon={hasIcon}
            $hasError={!!error}
            aria-invalid={!!error}
            aria-required={required}
            aria-describedby={error ? errorId : undefined}
            {...rest}
          />
        </InputContainer>

        {error && <ErrorText id={errorId}>{error.message}</ErrorText>}
      </FieldWrapper>
    );
  },
);

Input.displayName = "Input";
