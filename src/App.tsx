import React from "react";
import styled from "styled-components";

import { Fade } from "./animations/Fade";

function App() {
  return (
    <>
      <h1>Framer Motion</h1>

      <h2>Fade with slide</h2>
      <Fade direction="in" slideEntrance>
        <Box />
      </Fade>
    </>
  );
}

const Box = styled.div`
  background-color: #222c3f;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  border-radius: 10px;
  width: 100px;
  height: 100px;
`;

export default App;
