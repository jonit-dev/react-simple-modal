import React, { useState } from "react";
import styled from "styled-components";

import { Fade } from "./animations/Fade";
import { Button } from "./components/Button";
import { Modal } from "./components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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
        <p>hi</p>
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
