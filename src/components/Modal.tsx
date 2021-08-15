import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

interface IProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => any;
}

export const Modal: React.FC<IProps> = ({ isOpen, children, onClose }) => {
  const [canExit, setCanExit] = useState(true);

  const onCloseModal = () => {
    onClose();
    setCanExit(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalShadow
          initial={{ opacity: 0.9 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={() => onCloseModal()}
        >
          <ModalBasis
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            exit={canExit ? { y: 1000 } : undefined}
            onClick={(e) => e.stopPropagation()}
            drag="x"
            dragConstraints={{ left: -250, right: 250 }}
            onDragEnd={(e: any) => {
              console.log("dragEnd");
              if (e.x <= 150 || e.x >= 250) {
                setCanExit(false);
                onCloseModal();
              }
            }}
          >
            <CloseButton onClick={() => onCloseModal()}>✖</CloseButton>
            {children}
          </ModalBasis>
        </ModalShadow>
      )}
    </AnimatePresence>
  );
};

const ModalShadow = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.95);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CloseButton = styled.button`
  width: 30px;
  font-size: 20px;
  color: #c0c5cb;
  align-self: flex-end;
  background-color: transparent;
  border: none;
  margin-bottom: 10px;
`;

const ModalBasis = styled(motion.div)`
  margin: 0.5rem;
  width: 50vw;

  /*MOBILE ONLY CODE*/
  @media screen and (max-width: 700px) {
    width: 75vw;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  color: #000;
  text-align: center;
  border-radius: 20px;
  padding: 30px 30px 70px;
  border: 1px solid #d8d8d8;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  p {
    margin-bottom: 40px;
    font-size: 18px;
  }
`;
