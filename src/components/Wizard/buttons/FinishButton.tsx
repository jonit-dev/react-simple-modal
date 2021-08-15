import React from "react";
import { Feather } from "react-feather";
import styled from "styled-components";

import { Button } from "../../Button";

interface IProps {
  onClick: () => void;
  isDisabled?: boolean;
  children?: React.ReactNode;
}

export const FinishButton: React.FC<IProps> = ({
  onClick,
  isDisabled = false,
  children,
}) => {
  return (
    <Container onClick={onClick} className={isDisabled ? "disabled" : ""}>
      {children ? (
        children
      ) : (
        <Button>
          Finish <Feather />
        </Button>
      )}
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
