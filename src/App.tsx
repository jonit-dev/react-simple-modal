import React, { useState } from "react";
import styled from "styled-components";

import { Fade } from "./animations/Fade";
import { Button } from "./components/Button";
import { Modal } from "./components/Modal";
import { QuestionWizard } from "./components/Wizard/QuestionWizard";
import { IQuestion } from "./components/Wizard/questionWizard.types";

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const questionWizardQuestions: IQuestion[] = [
    {
      title: "What's your goal?",
      options: [
        {
          imageUrl: "/images/online-learning.png",
          label: "Learn the Basics",
          isSelected: false,
        },
        {
          imageUrl: "/images/portfolio.png",
          label: "Track my Portfolio",
          isSelected: false,
        },
        {
          imageUrl: "/images/portfolio.png",
          label: "Track my Portfolio",
          isSelected: false,
        },
      ],
    },
    {
      title: "What's the meaning of life?",
      options: [
        {
          imageUrl: "/images/online-learning.png",
          label: "Eat & Code",
          isSelected: false,
        },
      ],
    },
  ];

  return (
    <Container>
      <h1>Framer Motion</h1>

      <h2>Fade with slide</h2>
      <Fade direction="in" slideEntrance>
        <Box />
      </Fade>

      <h2>Modal</h2>
      <Button onClick={() => setIsModalOpen(true)}>Open modal</Button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(!isModalOpen)}>
        <QuestionWizard
          questions={questionWizardQuestions}
          onChange={(questions) => console.log(questions)}
          onFinish={() => setIsModalOpen(false)}
        />
      </Modal>
    </Container>
  );
}

const Box = styled.div`
  background-color: #222c3f;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  border-radius: 10px;
  width: 100px;
  height: 100px;
`;

const Container = styled.div``;

export default App;
