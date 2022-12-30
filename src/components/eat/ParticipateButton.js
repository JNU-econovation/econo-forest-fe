import PopUp from "./PopUp";
import styled from "styled-components";
import InfoButtonStyle from "../../styles/eat/InfoButtonStyle";
import { useState } from "react";
import EAT_INFO_BUTTONS from "../../constant/EAT_INFO_BUTTONS";

function ParticipateButton({ info }) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setIsPopUpOpen(true);
        }}
      >
        {EAT_INFO_BUTTONS.KOREAN["PARTICIPATE"]}
      </Button>
      <PopUp
        type={EAT_INFO_BUTTONS.KOREAN["PARTICIPATE"]}
        title={info.title + "에 참여하시겠습니까?"}
        isAuthor={info.isAuthor}
        infoTitle={info.title}
        infoNumParticipant={info.numParticipant}
        open={isPopUpOpen}
        setOpen={setIsPopUpOpen}
      />
    </>
  );
}

const Button = styled(InfoButtonStyle)`
  background-color: ${(props) => props.theme.orange};
  cursor: pointer;
`;

export default ParticipateButton;
