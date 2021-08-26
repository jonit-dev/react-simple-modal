import React, { useState } from "react";
import styled from "styled-components";

import { Fade } from "./animations/Fade";
import { Button } from "./components/Button";
import { Modal } from "./components/Modal";
import { SwipeableCard } from "./components/SwipeableCard";

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

      <h2>Card Animations</h2>

      <SwipeableCard
        id="card-1"
        title="What's the Stock Market"
        topImageSrc="/images/stock-market.png"
      >
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit nemo
          obcaecati alias, deleniti qui quod facilis rerum vitae nulla illo a
          amet, nihil, quibusdam architecto adipisci eius officiis sapiente aut.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit nemo
          obcaecati alias, deleniti qui quod facilis rerum vitae nulla illo a
          amet, nihil, quibusdam architecto adipisci eius officiis sapiente aut.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit nemo
          obcaecati alias,
        </p>
      </SwipeableCard>
      <SwipeableCard id="card-2" title="How to Lose Money Fast">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit nemo
          obcaecati alias, deleniti qui quod facilis rerum vitae nulla illo a
          amet, nihil, quibusdam architecto adipisci eius officiis sapiente aut.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit nemo
          obcaecati alias, deleniti qui quod facilis rerum vitae nulla illo a
          amet, nihil, quibusdam architecto adipisci eius officiis sapiente aut.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit nemo
          obcaecati alias,
        </p>
      </SwipeableCard>
      <SwipeableCard id="card-2" title="How to Lose Money Fast">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit nemo
          obcaecati alias, deleniti qui quod facilis rerum vitae nulla illo a
          amet, nihil, quibusdam architecto adipisci eius officiis sapiente aut.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit nemo
          obcaecati alias, deleniti qui quod facilis rerum vitae nulla illo a
          amet, nihil, quibusdam architecto adipisci eius officiis sapiente aut.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit nemo
          obcaecati alias,
        </p>
      </SwipeableCard>
      <SwipeableCard id="card-2" title="How to Lose Money Fast">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit nemo
          obcaecati alias, deleniti qui quod facilis rerum vitae nulla illo a
          amet, nihil, quibusdam architecto adipisci eius officiis sapiente aut.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit nemo
          obcaecati alias, deleniti qui quod facilis rerum vitae nulla illo a
          amet, nihil, quibusdam architecto adipisci eius officiis sapiente aut.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit nemo
          obcaecati alias,
        </p>
      </SwipeableCard>
      <SwipeableCard id="card-2" title="How to Lose Money Fast">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit nemo
          obcaecati alias, deleniti qui quod facilis rerum vitae nulla illo a
          amet, nihil, quibusdam architecto adipisci eius officiis sapiente aut.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit nemo
          obcaecati alias, deleniti qui quod facilis rerum vitae nulla illo a
          amet, nihil, quibusdam architecto adipisci eius officiis sapiente aut.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit nemo
          obcaecati alias,
        </p>
      </SwipeableCard>
      <SwipeableCard id="card-2" title="How to Lose Money Fast">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit nemo
          obcaecati alias, deleniti qui quod facilis rerum vitae nulla illo a
          amet, nihil, quibusdam architecto adipisci eius officiis sapiente aut.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit nemo
          obcaecati alias, deleniti qui quod facilis rerum vitae nulla illo a
          amet, nihil, quibusdam architecto adipisci eius officiis sapiente aut.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit nemo
          obcaecati alias,
        </p>
      </SwipeableCard>
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
