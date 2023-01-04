import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { useState } from "react";

import NonAuthorModal from "./NonEditModal";
import EAT_INFO_BUTTONS from "../../constant/EAT_INFO_BUTTONS";
import PlanButtonStyle from "../../styles/eat/PlanButtonStyle";
import isPopUpOpenState from "../../recoil/eat/isPopUpOpenState";
import ModalInfo from "../../styles/eat/ModalInfo";

function CancelButton({ info }) {
  const [open, setOpen] = useState(false);
  const setIsPopUpOpen = useSetRecoilState(isPopUpOpenState);

  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
          setIsPopUpOpen(true);
        }}
      >
        {EAT_INFO_BUTTONS.KOREAN["CANCEL"]}
      </Button>
      <NonAuthorModal
        modalType={EAT_INFO_BUTTONS.KOREAN["CANCEL"]}
        title={info.title + "에 불참하시겠습니까?"}
        isAuthor={info.isAuthor}
        open={open}
        setOpen={setOpen}
      >
        <ModalInfo>
          <div className="title">날짜</div>
          <div className="text">{info.authorName}</div>
        </ModalInfo>
        <ModalInfo>
          <div className="title">장소</div>
          <div className="text">{info.location}</div>
        </ModalInfo>
        <ModalInfo>
          <div className="title">글쓴이</div>
          <div className="text">{info.authorName}</div>
        </ModalInfo>
      </NonAuthorModal>
    </>
  );
}

const Button = styled(PlanButtonStyle)`
  background-color: ${(props) => props.theme.yellow};
  cursor: pointer;
`;

export default CancelButton;
