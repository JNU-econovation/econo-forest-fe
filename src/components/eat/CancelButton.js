import styled from "styled-components";
import InfoButtonStyle from "../../styles/eat/InfoButtonStyle";
import { useState } from "react";
import PopUp from "./PopUp";
import EAT_INFO_BUTTONS from "../../constant/EAT_INFO_BUTTONS";

function CancelButton({ info }) {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setIsPopUpOpen(true);
        }}
      >
        {EAT_INFO_BUTTONS.KOREAN["CANCEL"]}
      </Button>
      <PopUp
        type={EAT_INFO_BUTTONS.KOREAN["CANCEL"]}
        title={info.title + "에 불참하시겠습니까?"}
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
  background-color: ${(props) => props.theme.yellow};
  cursor: pointer;
`;

export default CancelButton;
