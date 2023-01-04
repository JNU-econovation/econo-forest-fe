import styled from "styled-components";
import { useSetRecoilState } from "recoil";

import PopUp from "./PopUp";
import EAT_INFO_BUTTONS from "../../constant/EAT_INFO_BUTTONS";
import PlanButtonStyle from "../../styles/eat/PlanButtonStyle";
import isPopUpOpenState from "../../recoil/eat/isPopUpOpenState";
import { useState } from "react";

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
      <PopUp
        type={EAT_INFO_BUTTONS.KOREAN["CANCEL"]}
        title={info.title + "에 불참하시겠습니까?"}
        isAuthor={info.isAuthor}
        infoTitle={info.title}
        infoNumParticipant={info.numParticipant}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}

const Button = styled(PlanButtonStyle)`
  background-color: ${(props) => props.theme.yellow};
  cursor: pointer;
`;

export default CancelButton;
