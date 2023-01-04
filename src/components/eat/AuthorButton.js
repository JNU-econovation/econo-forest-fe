import styled from "styled-components";
import PopUp from "./PopUp";
import PlanButtonStyle from "../../styles/eat/PlanButtonStyle";
import EAT_INFO_BUTTONS from "../../constant/EAT_INFO_BUTTONS";
import { useSetRecoilState } from "recoil";
import isPopUpOpenState from "../../recoil/eat/isPopUpOpenState";
import { useState } from "react";

function AuthorButton({ info }) {
  const [open, setOpen] = useState(false);
  const setIsPopUpOpen = useSetRecoilState(isPopUpOpenState);

  return (
    <>
      <Button>
        <div className="edit-button" onClick={() => {}}>
          {EAT_INFO_BUTTONS.KOREAN["UPDATE"]}
        </div>
        <div
          className="delete-button"
          onClick={() => {
            setOpen(true);
            setIsPopUpOpen(true);
          }}
        >
          {EAT_INFO_BUTTONS.KOREAN["DELETE"]}
        </div>
      </Button>
      <PopUp
        type={EAT_INFO_BUTTONS.KOREAN["DELETE"]}
        title="게시글을 삭제하시겠습니까?"
        isAuthor={info.isAuthor}
        infoTitle={info.title}
        infoNumParticipant={info.numParticipant}
        open={open}
        setOpen={setOpen}
      >
        <DeleteReason placeholder="삭제 사유를 작성해주세요."></DeleteReason>
      </PopUp>
    </>
  );
}

const Button = styled(PlanButtonStyle)`
  flex-direction: column;

  div {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .edit-button {
    background-color: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.bodyColor};
    border-radius: 10px 10px 0 0;
    border-bottom: 2px solid ${(props) => props.theme.black};
  }

  .delete-button {
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.additiveColor};
    border-radius: 0 0 10px 10px;
  }
`;

const DeleteReason = styled.textarea`
  width: 100%;
  height: 120px;

  margin-top: 10px;
  padding: 10px;

  resize: none;
  border: 1px solid #aaa;
`;

export default AuthorButton;
