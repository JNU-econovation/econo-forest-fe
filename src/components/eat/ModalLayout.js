import { Backdrop } from "@mui/material";
import { IoCloseOutline } from "react-icons/io5";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

import isPopUpOpenState from "../../recoil/eat/isPopUpOpenState";

function ModalLayout({ modalType, title, open, setOpen, children }) {
  const setIsPopUpOpen = useSetRecoilState(isPopUpOpenState);

  return (
    <Backdrop sx={{ color: "#fff" }} open={open}>
      <ModalSection>
        {!modalType ? undefined : (
          <TopBox>
            <div className="modal-type">{modalType}하기</div>
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
        )}
        {title ? <Title>{title}</Title> : undefined}
        {children}
      </ModalSection>
    </Backdrop>
  );
}

const ModalSection = styled.div`
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
  float: right;

  .modal-type {
    font-size: 20px;
    font-weight: bold;
    color: ${(props) => props.theme.highlightColor};
  }

  .pop-up-close {
    font-size: 30px;
    color: #707070;
    cursor: pointer;
  }
`;

const Title = styled.div`
  margin-bottom: 15px;
  color: ${(props) => props.theme.highlightColor};
  font-size: 16px;
  font-weight: bold;
`;

export default ModalLayout;
