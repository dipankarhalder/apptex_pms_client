import styled from "styled-components";
import { fontSize, fontWeight } from "../../styles/mixins";
import { Check } from "../common/Icons";

const RulesWrapper = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin-top: 0;
  flex-wrap: wrap;
`;

const RuleItem = styled.li`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 50%;
  ${fontSize("11px")}
  ${fontWeight("500")}
  color: ${({ $valid, theme }) =>
    $valid ? theme.colors.green50 : theme.colors.gray60};

  & > svg {
    width: 14px;
    height: 14px;

    & > path {
      stroke: ${({ $valid, theme }) =>
        $valid ? theme.colors.green50 : theme.colors.gray80};
    }
  }
`;

export const PassRules = ({ password }) => {
  const passwordRules = [
    {
      label: "Minimum 8 characters",
      test: (value = "") => value.length >= 8,
    },
    {
      label: "At least 1 uppercase letter",
      test: (value = "") => /[A-Z]/.test(value),
    },
    {
      label: "At least 1 lowercase letter",
      test: (value = "") => /[a-z]/.test(value),
    },
    {
      label: "At least 1 number",
      test: (value = "") => /[0-9]/.test(value),
    },
    {
      label: "At least 1 special character",
      test: (value = "") => /[@$!%*?&#^()_+\-=[\]{};':"\\|,.<>/?]/.test(value),
    },
  ];

  return (
    <RulesWrapper>
      {passwordRules.map((rule) => {
        const isValid = rule.test(password);

        return (
          <RuleItem key={rule.label} $valid={isValid}>
            <Check color={isValid ? "green" : "gray"} size={14} />
            {rule.label}
          </RuleItem>
        );
      })}
    </RulesWrapper>
  );
};
