import styled, { keyframes, css } from "styled-components";
import { Cross } from "../../icons";

const slideIn = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`;

export const ToastWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  opacity: 0;
  pointer-events: none;

  ${({ $show }) =>
    $show
      ? css`
          animation: ${slideIn} 0.4s ease forwards;
          opacity: 1;
          pointer-events: auto;
        `
      : css`
          animation: ${slideOut} 0.4s ease forwards;
          pointer-events: none;
        `}
`;

export const ToastCover = styled.div`
  position: relative;
  max-width: 460px;
  background: ${({ theme }) => theme.colors.white};
  padding: 12px 50px 14px 20px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.colors.shadow1};

  ${({ $type }) =>
    $type === "success" &&
    css`
      border-left: 3px solid ${({ theme }) => theme.colors.green30};
      h5 {
        color: ${({ theme }) => theme.colors.green30};
      }
    `}

  ${({ $type }) =>
    $type === "info" &&
    css`
      border-left: 3px solid ${({ theme }) => theme.colors.blue30};
      h5 {
        color: ${({ theme }) => theme.colors.blue30};
      }
    `}

  ${({ $type }) =>
    $type === "error" &&
    css`
      border-left: 3px solid ${({ theme }) => theme.colors.red30};
      h5 {
        color: ${({ theme }) => theme.colors.red30};
      }
    `}

  ${({ $type }) =>
    $type === "warning" &&
    css`
      border-left: 3px solid ${({ theme }) => theme.colors.orange40};
      h5 {
        color: ${({ theme }) => theme.colors.orange40};
      }
    `}
`;

export const ToastContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  h5 {
    font-size: 16px;
  }

  p {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.gray40};
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 6px;
  right: 6px;
  border: none;
  background: transparent;
  width: 30px;
  height: 30px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Toast = ({ show, removeToast, toastData }) => {
  const { type, heading, description } = toastData;

  return (
    <ToastWrapper $show={show}>
      <ToastCover $type={type}>
        <ToastContent>
          <h5>{heading}</h5>
          {description && <p>{description}</p>}
        </ToastContent>
        <CloseButton onClick={() => removeToast()}>
          <Cross />
        </CloseButton>
      </ToastCover>
    </ToastWrapper>
  );
};
