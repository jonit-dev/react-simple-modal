import React from "react";
import { ChevronRight } from "react-feather";
import styled from "styled-components";

import { Button } from "../../Button";

interface IProps {
  onClick: () => void;
  isDisabled?: boolean;
}

export const NextButton: React.FC<IProps> = ({
  onClick,
  isDisabled = false,
}) => {
  return (
    <Container>
      <Button onClick={onClick} isDisabled={isDisabled}>
        Next <ChevronRight />
      </Button>
    </Container>
  );
};

const Container = styled.div`
  margin-right: 0.5rem;
`;
