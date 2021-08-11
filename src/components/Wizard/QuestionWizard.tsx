import React, { useEffect, useState } from "react";
import { ChevronRight } from "react-feather";
import styled from "styled-components";

import { questionWizardTheme } from "../../constants/questionWizard.constants";
import { Button } from "../Button";
import { QuestionOptionCard } from "./QuestionOptionCard";
import { IQuestion } from "./questionWizard.types";

interface IProps {
  questions: IQuestion[];
}

export const QuestionWizard: React.FC<IProps> = ({ questions }) => {
  const [questionsIndex] = useState<number>(0);
  const [totalQuestions] = useState<number>(questions.length);

  const [currentQuestion, setCurrentQuestion] = useState(
    questions[questionsIndex]
  );

  const onToggleOptionSelected = (targetIndex: number) => {
    const updatedOptions = currentQuestion.options.map((option, i) => {
      if (targetIndex === i) {
        option.isSelected = !option.isSelected;
      } else {
        option.isSelected = false; // all the others are deselected
      }

      return option;
    });

    setCurrentQuestion({
      ...currentQuestion,
      options: updatedOptions,
    });
  };

  const onRenderOptions = () =>
    currentQuestion.options.map((option, i) => (
      <QuestionOptionCard
        key={`${option.label}_${i}`}
        onClick={() => {
          onToggleOptionSelected(i);
        }}
        isSelected={option.isSelected}
        imageUrl={option.imageUrl}
        label={option.label}
      />
    ));

  return (
    <Container>
      <Header>
        <QuestionLabel>
          Question {questionsIndex}/{totalQuestions}
        </QuestionLabel>
        <QuestionTitle>{currentQuestion.title}</QuestionTitle>
      </Header>
      <Body>{onRenderOptions()}</Body>
      <Footer>
        <Button>
          Next <ChevronRight />
        </Button>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  font-family: "Open Sans", sans-serif;
`;

const Header = styled.div`
  height: 30%;
  width: 100%;
  margin-bottom: 1.5rem;
`;

const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
`;

const QuestionLabel = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  text-align: center;
  color: ${questionWizardTheme.mediumGray};
`;

const QuestionTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: ${questionWizardTheme.darkGray};
`;
