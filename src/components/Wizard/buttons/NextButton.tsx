import React from "react";
import { ChevronRight, Icon } from "react-feather";
import styled from "styled-components";

import { Button } from "../../Button";

interface IProps {
  onClick: () => void;
  isDisabled?: boolean;
  children?: React.ReactNode;
  defaultLabel?: string;
  defaultIcon?: Icon;
}

export const NextButton: React.FC<IProps> = ({
  onClick,
  isDisabled = false,
  children,
  defaultLabel = "Next",
  defaultIcon = <ChevronRight size={20} />,
}) => {
  return (
    <Container onClick={onClick} className={isDisabled ? "disabled" : ""}>
      {children ? (
        children
      ) : (
        <Button>
          {defaultLabel} {defaultIcon}
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
