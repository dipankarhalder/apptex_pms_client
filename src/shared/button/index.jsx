/** node modules */
import styled, { keyframes } from "styled-components";

/** styles keyframe */
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

/** inline styles */
const Spinner = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-top: 2px solid ${({ theme }) => theme.colors.blue50};
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: ${spin} 0.8s linear infinite;
`;

const ButtonWrapper = styled.button`
  padding: 10px 16px;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight[500]};
  border-radius: 6px;
  border: none;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.gray80 : theme.colors.blue30};
  color: ${({ disabled, theme }) =>
    disabled ? theme.colors.gray50 : theme.colors.white};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ disabled, theme }) =>
      !disabled ? theme.colors.blue20 : undefined};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.blue50};
    outline-offset: 2px;
  }

  ${({ $fullWidth }) =>
    $fullWidth &&
    `
    width: 100%;
  `}
`;

/** render element */
export const Button = ({
  children,
  disabled = false,
  fullWidth = false,
  loading = false,
  ...rest
}) => {
  return (
    <ButtonWrapper disabled={disabled} $fullWidth={fullWidth} {...rest}>
      {loading ? <Spinner /> : children}
    </ButtonWrapper>
  );
};
