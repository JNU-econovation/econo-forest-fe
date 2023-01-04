import { Backdrop } from "@mui/material";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import isPopUpOpenState from "../../recoil/eat/isPopUpOpenState";

function PopUp({ type, title, open, setOpen, isAuthor, children }) {
  const setIsPopUpOpen = useSetRecoilState(isPopUpOpenState);

  return (
    <Backdrop sx={{ color: "#fff" }} open={open}>
      <PopUpSection>
        <TopBox>
          <div className="type">{type}하기</div>
          <div
            className="pop-up-close"
            onClick={() => {
              setOpen(false);
              setIsPopUpOpen(false);
            }}
          >
            <IoCloseOutline />
          </div>
        </TopBox>
        <Title>{title}</Title>
        {children}
        <Button isAuthor={isAuthor}>{type}</Button>
      </PopUpSection>
    </Backdrop>
  );
}

const PopUpSection = styled.div`
  width: 350px;
  padding: 25px 30px;
  position: relative;
  z-index: 1;

  background-color: ${(props) => props.theme.white};
  border-radius: 10px;
`;

const TopBox = styled.div`
  width: 100%;
  margin-bottom: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .type {
    font-size: 20px;
    font-weight: bold;
    color: ${(props) => props.theme.highlightColor};
  }

  .pop-up-close {
    font-size: 30px;
    color: #707070;
  }
`;

const Title = styled.div`
  margin-bottom: 15px;
  color: ${(props) => props.theme.highlightColor};
  font-size: 16px;
  font-weight: bold;
`;

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
`;

export default React.memo(PopUp);
