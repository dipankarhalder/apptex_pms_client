/** node modules */
import { forwardRef } from "react";
import styled from "styled-components";

/** styles module */
import { fontSize, fontWeight, borderRadius } from "../../styles";

/** inline styles */
const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  ${fontSize("14px")}
  ${fontWeight("500")}
  color: ${({ theme }) => theme.colors.bodytext};
  margin-bottom: 6px;
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

const Input = styled.input`
  width: 100%;
  ${fontSize("14px")}
  ${borderRadius("6px")}

  padding: ${({ $hasIcon }) =>
    $hasIcon ? "10px 14px 10px 50px" : "10px 14px"};

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
      $hasError ? theme.colors.red40 : theme.colors.blue30};
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
export const InputIconField = forwardRef(
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

    return (
      <FieldWrapper>
        {label && (
          <Label htmlFor={inputId}>
            {label}
            {required && <Required>*</Required>}
          </Label>
        )}

        <InputContainer>
          {leftIcon && <LeftIconWrapper>{leftIcon}</LeftIconWrapper>}
          <Input
            id={inputId}
            name={name}
            type={type}
            disabled={disabled}
            ref={ref}
            $hasError={!!error}
            $hasIcon={!!leftIcon}
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

InputIconField.displayName = "InputIconField";
