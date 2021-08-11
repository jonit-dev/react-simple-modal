import React from "react";
import { CheckCircle } from "react-feather";
import styled from "styled-components/macro";

import { questionWizardTheme } from "../../constants/questionWizard.constants";

interface IProps {
  imageUrl: string;
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

export const QuestionOptionCard: React.FC<IProps> = ({
  imageUrl,
  label,
  isSelected,
  onClick,
}) => {
  return (
    <IconBox className={!isSelected ? "inactive" : ""} onClick={onClick}>
      {isSelected && <CustomCheckCircle />}
      <img src={imageUrl} alt="question option icon" />
      <IconBoxLabel>{label}</IconBoxLabel>
    </IconBox>
  );
};

const IconBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 1px solid ${questionWizardTheme.blue};
  width: 166px;
  height: 212px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.05);
  margin: 0.5rem;
  position: relative;

  &.inactive {
    filter: grayscale(100%);
    opacity: 0.5;
  }
`;

const IconBoxLabel = styled.span`
  font-size: 0.8rem;
  color: ${questionWizardTheme.gray};
  font-weight: bold;
  width: 100%;
`;

const CustomCheckCircle = styled(CheckCircle)`
  position: absolute;
  top: 0.7rem;
  right: 0.7rem;
  color: ${questionWizardTheme.blue};
`;
