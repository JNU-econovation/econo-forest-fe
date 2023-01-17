import plusIcon from "../../images/Icon feather-plus-circle@2x.webp";
import styled from "styled-components";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import isPopUpOpenState from "../../recoil/eat/isPopUpOpenState";
import EditModal from "./EditModal";
import EAT_INFO_BUTTONS from "../../constant/EAT_INFO_BUTTONS";

function Title() {
  const [open, setOpen] = useState(false);
  const setIsPopUpOpen = useSetRecoilState(isPopUpOpenState);

  return (
    <>
      <TitleBox>
        <div className="title">밥먹어요</div>
        <img
          className="plus-icon"
          src={plusIcon}
          alt="plus-icon"
          onClick={() => {
            setOpen(true);
            setIsPopUpOpen(true);
          }}
        />
      </TitleBox>
      <EditModal
        modalType={EAT_INFO_BUTTONS.KOREAN["CREATE"]}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}

const TitleBox = styled.div`
  width: 100%;
  padding-bottom: 25px;

  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  color: ${(props) => props.theme.brightColor};
  font-family: ${(props) => props.theme.logoFont};
  font-size: ${(props) => props.theme.titleFontSize};

  .title {
    padding-right: 9px;
  }

  .plus-icon {
    width: 20px;
    height: 20px;
    object-fit: contain;
    cursor: pointer;
  }
`;

export default Title;
