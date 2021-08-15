import React from "react";
import { ChevronLeft, ChevronRight, Feather } from "react-feather";
import styled from "styled-components";

import { Button } from "../../Button";
import { IQuestionButton } from "../questionWizard.types";

const defaultButtons = {
  next: () => (
    <>
      Next <ChevronRight size={20} />
    </>
  ),
  previous: () => (
    <>
      <ChevronLeft size={20} /> Previous
    </>
  ),
  finish: () => (
    <>
      Finish <Feather size={20} />
    </>
  ),
};

export const QuestionButton: React.FC<IQuestionButton> = ({
  onClick,
  isDisabled = false,
  children,
  type,
}) => {
  return (
    <Container onClick={onClick} className={isDisabled ? "disabled" : ""}>
      {children ? children : <Button>{defaultButtons[type]()}</Button>}
    </Container>
  );
};

const Container = styled.div`
  margin-right: 0.5rem;

  &.disabled {
    filter: grayscale(100%);
    opacity: 0.4;
  }
`;
