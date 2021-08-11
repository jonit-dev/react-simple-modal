import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { questionWizardTheme } from "../../constants/questionWizard.constants";
import { NextButton } from "./buttons/NextButton";
import { PreviousButton } from "./buttons/PreviousButton";
import { QuestionOptionCard } from "./QuestionOptionCard";
import { IQuestion } from "./questionWizard.types";

interface IProps {
  questions: IQuestion[];
}

export const QuestionWizard: React.FC<IProps> = ({ questions }) => {
  const [questionsIndex, setQuestionsIndex] = useState<number>(0);
  const [totalQuestions] = useState<number>(questions.length);

  const [currentQuestion, setCurrentQuestion] = useState(
    questions[questionsIndex]
  );

  useEffect(() => {
    setCurrentQuestion(questions[questionsIndex]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questionsIndex]);

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

  const isPreviousDisabled = questionsIndex === 0;
  const isNextDisabled = questionsIndex === totalQuestions - 1;

  const onNextClick = () => {
    !isNextDisabled && setQuestionsIndex((prev) => prev + 1);
  };

  const onPreviousClick = () => {
    !isPreviousDisabled && setQuestionsIndex((prev) => prev - 1);
  };

  return (
    <Container>
      <Header>
        <QuestionLabel>
          Question {questionsIndex + 1}/{totalQuestions}
        </QuestionLabel>
        <QuestionTitle>{currentQuestion.title}</QuestionTitle>
      </Header>
      <Body>{onRenderOptions()}</Body>
      <Footer>
        <PreviousButton
          onClick={onPreviousClick}
          isDisabled={isPreviousDisabled}
        />

        <NextButton onClick={onNextClick} isDisabled={isNextDisabled} />
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  font-family: "Open Sans", sans-serif;
  min-width: 70%;
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
  justify-content: space-between;
  margin-top: 1.5rem;
  width: 100%;
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
