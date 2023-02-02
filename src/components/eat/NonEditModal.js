import React from "react";
import styled from "styled-components";
import ModalLayout from "./ModalLayout";

function NonEditModal({
  modalType,
  onButtonClick,
  title,
  open,
  setOpen,
  isAuthor,
  children,
}) {
  return (
    <ModalLayout
      modalType={modalType}
      title={title}
      open={open}
      setOpen={setOpen}
    >
      {children}
      <Button onClick={onButtonClick} isAuthor={isAuthor}>
        {modalType}
      </Button>
    </ModalLayout>
  );
}

const Button = styled.div`
  width: 100px;
  height: 35px;

  margin: 20px auto 0 auto;

  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.white};
  background-color: ${(props) =>
    props.isAuthor ? props.theme.orange : "#646464"};
  font-size: 16px;

  cursor: pointer;
`;

export default React.memo(NonEditModal);
