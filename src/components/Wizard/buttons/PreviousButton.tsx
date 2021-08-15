import React from "react";
import { ChevronLeft, Icon } from "react-feather";
import styled from "styled-components";

import { Button } from "../../Button";

interface IProps {
  onClick: () => void;
  isDisabled?: boolean;
  children?: React.ReactNode;
  defaultLabel?: string;
  defaultIcon?: Icon;
}

export const PreviousButton: React.FC<IProps> = ({
  onClick,
  isDisabled = false,
  children,
  defaultLabel = "Previous",
  defaultIcon = <ChevronLeft size={20} />,
}) => {
  return (
    <Container onClick={onClick} className={isDisabled ? "disabled" : ""}>
      {children ? (
        children
      ) : (
        <Button>
          {defaultIcon} {defaultLabel}
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
