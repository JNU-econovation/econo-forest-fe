import { useState } from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";

import EditModal from "./EditModal";
import NonEditModal from "./NonEditModal";
import PlanButtonStyle from "../../styles/eat/PlanButtonStyle";
import EAT_INFO_BUTTONS from "../../constant/EAT_INFO_BUTTONS";
import isPopUpOpenState from "../../recoil/eat/isPopUpOpenState";

function AuthorButton({ info }) {
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const setIsPopUpOpen = useSetRecoilState(isPopUpOpenState);

  return (
    <>
      <Button>
        <div
          className="edit-button"
          onClick={() => {
            setEditOpen(true);
            setIsPopUpOpen(true);
          }}
        >
          {EAT_INFO_BUTTONS.KOREAN["UPDATE"]}
        </div>
        <div
          className="delete-button"
          onClick={() => {
            setDeleteOpen(true);
            setIsPopUpOpen(true);
          }}
        >
          {EAT_INFO_BUTTONS.KOREAN["DELETE"]}
        </div>
      </Button>
      <EditModal
        modalType={EAT_INFO_BUTTONS.KOREAN["UPDATE"]}
        title={info.title + "을 수정하시겠습니까?"}
        open={editOpen}
        setOpen={setEditOpen}
      />
      <NonEditModal
        modalType={EAT_INFO_BUTTONS.KOREAN["DELETE"]}
        title={info.title + "을 삭제하시겠습니까?"}
        isAuthor={info.isAuthor}
        open={deleteOpen}
        setOpen={setDeleteOpen}
      >
        <DeleteReason placeholder="삭제 사유를 작성해주세요." />
      </NonEditModal>
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
