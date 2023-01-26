import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { useState, useEffect } from "react";

import NonEditModal from "./NonEditModal";
import EAT_INFO_BUTTONS from "../../constant/EAT_INFO_BUTTONS";
import PlanButtonStyle from "../../styles/eat/PlanButtonStyle";
import isPopUpOpenState from "../../recoil/eat/isPopUpOpenState";
import ModalInfo from "../../styles/eat/ModalInfo";
import { EpochSecondToDateObject } from "../../lib/utils/EpochConverter";
import EAT_LOCATIONS from "../../constant/EAT_LOCATIONS";

function CancelButton({ info }) {
  const [open, setOpen] = useState(false);
  const setIsPopUpOpen = useSetRecoilState(isPopUpOpenState);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const dateTime = EpochSecondToDateObject(info.eatInfo);
    setDate(
      `${dateTime.getFullYear()}.${
        dateTime.getMonth() + 1
      }.${dateTime.getDate()}`
    );

    setTime(`${dateTime.getHours()}시 ${dateTime.getMinutes()}분`);
  }, [info]);

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
      <NonEditModal
        modalType={EAT_INFO_BUTTONS.KOREAN["CANCEL"]}
        title={info.title + "에 불참하시겠습니까?"}
        isAuthor={info.isAuthor}
        open={open}
        setOpen={setOpen}
      >
        <ModalInfo>
          <div className="title">장소</div>
          <div className="text">{EAT_LOCATIONS.KOREAN[info.location]}</div>
        </ModalInfo>
        <ModalInfo>
          <div className="title">날짜</div>
          <div className="text">{date}</div>
        </ModalInfo>
        <ModalInfo>
          <div className="title">시간</div>
          <div className="text">{time}</div>
        </ModalInfo>
        <ModalInfo>
          <div className="title">글쓴이</div>
          <div className="text">{info.authorName}</div>
        </ModalInfo>
      </NonEditModal>
    </>
  );
}

const Button = styled(PlanButtonStyle)`
  background-color: ${(props) => props.theme.yellow};
  cursor: pointer;
`;

export default CancelButton;
