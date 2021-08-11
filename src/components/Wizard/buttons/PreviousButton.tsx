import React from "react";
import { ChevronLeft } from "react-feather";
import styled from "styled-components";

import { Button } from "../../Button";

interface IProps {
  onClick: () => void;
  isDisabled?: boolean;
}

export const PreviousButton: React.FC<IProps> = ({ onClick, isDisabled }) => {
  return (
    <Container>
      <Button onClick={onClick} isDisabled={isDisabled}>
        <ChevronLeft /> Previous
      </Button>
    </Container>
  );
};

const Container = styled.div`
  margin-left: 0.5rem;
`;
