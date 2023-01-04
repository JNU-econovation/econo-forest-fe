import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { useState } from "react";

import NonAuthorModal from "./NonEditModal";
import PlanButtonStyle from "../../styles/eat/PlanButtonStyle";
import EAT_INFO_BUTTONS from "../../constant/EAT_INFO_BUTTONS";
import isPopUpOpenState from "../../recoil/eat/isPopUpOpenState";

function ParticipateButton({ info }) {
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
        {EAT_INFO_BUTTONS.KOREAN["PARTICIPATE"]}
      </Button>
      <NonAuthorModal
        modalType={EAT_INFO_BUTTONS.KOREAN["PARTICIPATE"]}
        title={info.title + "에 참여하시겠습니까?"}
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
  background-color: ${(props) => props.theme.orange};
  cursor: pointer;
`;

export default ParticipateButton;
