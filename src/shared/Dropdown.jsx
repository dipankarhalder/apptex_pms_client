import { forwardRef } from "react";
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

const SelectContainer = styled.div`
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

const sharedSelectStyles = css`
  width: 100%;
  padding: ${({ $hasIcon }) =>
    $hasIcon ? "10px 14px 10px 50px" : "10px 14px"};

  ${fontSize("14px")}
  ${borderRadius("6px")}

  border: 1px solid
    ${({ $hasError, theme }) =>
    $hasError ? theme.colors.red40 : theme.colors.inputborder};

  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.disabledBg : theme.colors.white};

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};

  transition:
    border-color 0.2s ease,
    background-color 0.2s ease;

  &:focus-visible {
    outline: none;
    border-color: ${({ $hasError, theme }) =>
      $hasError ? theme.colors.red40 : theme.colors.blue50};
  }

  &:disabled {
    opacity: 0.7;
  }
`;

const SelectElement = styled.select`
  ${sharedSelectStyles}
`;

const ErrorText = styled.span`
  ${fontSize("12px")}
  margin-top: 4px;
  color: ${({ theme }) => theme.colors.red40};
`;

export const Dropdown = forwardRef(
  (
    {
      label,
      name,
      options = [],
      error,
      required = false,
      disabled = false,
      leftIcon,
      ...rest
    },
    ref,
  ) => {
    const selectId = `select-${name}`;
    const errorId = `${selectId}-error`;
    const hasIcon = Boolean(leftIcon);

    return (
      <FieldWrapper>
        {label && (
          <Label htmlFor={selectId}>
            {label}
            {required && <Required>*</Required>}
          </Label>
        )}

        <SelectContainer>
          {hasIcon && <IconWrapper>{leftIcon}</IconWrapper>}

          <SelectElement
            id={selectId}
            name={name}
            ref={ref}
            disabled={disabled}
            $hasIcon={hasIcon}
            $hasError={!!error}
            aria-invalid={!!error}
            aria-required={required}
            aria-describedby={error ? errorId : undefined}
            {...rest}
          >
            <option value="">Select...</option>
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </SelectElement>
        </SelectContainer>

        {error && <ErrorText id={errorId}>{error.message}</ErrorText>}
      </FieldWrapper>
    );
  },
);

Dropdown.displayName = "Dropdown";
