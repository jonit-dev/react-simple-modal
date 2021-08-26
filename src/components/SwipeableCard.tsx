import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import styled from "styled-components/macro";

interface IProps {
  id: string;
  title: string;
  children: React.ReactNode;
  onSwipe?: (direction) => void;
  onCardLeftScreen?: (myIdentifier) => void;
  topImageSrc?: string;
}

export const SwipeableCard: React.FC<IProps> = ({
  id,
  title,
  children,
  onSwipe,
  onCardLeftScreen,
  topImageSrc = "/images/book.png",
}) => {
  const [randomRotation] = useState(Math.floor(Math.random() * 5));

  return (
    <Container>
      <CustomTinderCard
        onSwipe={onSwipe}
        onCardLeftScreen={() => {
          if (onCardLeftScreen) {
            onCardLeftScreen(id);
          }
        }}
        preventSwipe={["up", "down"]}
      >
        <CardBody randomRotation={randomRotation}>
          <CardRow>
            <TopIcon src={topImageSrc} alt="card icon"></TopIcon>
          </CardRow>
          <CardRow>
            <LessonTitle>{title}</LessonTitle>
          </CardRow>
          <CardRow>
            <LessonContent>{children}</LessonContent>
          </CardRow>
        </CardBody>
      </CustomTinderCard>
    </Container>
  );
};

const CustomTinderCard = styled(TinderCard)`
  position: relative;
`;

interface ICardBody {
  randomRotation: number;
}

const Container = styled.div``;

const CardBody = styled.div<ICardBody>`
  box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.1), 1px 1px 3px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  font-family: "Ubuntu", sans-serif;
  width: 100%;
  max-width: 90vw;
  min-height: 50vh;
  background: #fff;
  border-radius: 3px;
  border: 1px solid silver;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  box-sizing: border-box;
  transform: ${({ randomRotation }) => `rotate(${randomRotation}deg)`};
`;

const CardRow = styled.div`
  flex: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const TopIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 1rem;
`;

const LessonTitle = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  text-align: center;
  color: #313030;
`;

const LessonContent = styled.div`
  font-size: 0.9rem;
  line-height: 1.4;
  color: #484444;
  text-align: center;
`;
