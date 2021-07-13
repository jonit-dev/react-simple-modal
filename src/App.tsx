import React from "react";
import styled from "styled-components";

import { Fade } from "./animations/Fade";

 

function App() {

 

  return (
    <>
    <h1>Framer Motion</h1>


 
<Fade direction="in">
<Box/>
 
</Fade>
    </>
  );
}

const Box = styled.div`
  background-color: red;
  width: 100px;
  height: 100px;
`

export default App;
