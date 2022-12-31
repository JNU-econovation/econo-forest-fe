import PlanInfoStyle from "../../styles/eat/PlanInfoStyle";
import styled, { css } from "styled-components";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import isPopUpOpenState from "../../recoil/atoms/eat/isPopUpOpenState";

function PlanInfoView({ info }) {
  const [isHover, setIsHover] = useState(false);
  const isPopUpOpen = useRecoilValue(isPopUpOpenState);
  return (
    <Section isPopUpOpen={isPopUpOpen}>
      <div id="id">{info.id}</div>
      <div id="title">{info.title}</div>
      <div id="date">{info.date}</div>
      <div id="time">{info.time}</div>
      <div id="location">{info.location}</div>
      <div
        id="numParticipant"
        onMouseOver={() => {
          setIsHover(true);
        }}
        onMouseOut={() => {
          setIsHover(false);
        }}
      >
        {info.numParticipant}

        {isHover && !isPopUpOpen ? (
          <ParticipantsBox numParticipant={info.numParticipant}>
            {info.participants.map((participant) => (
              <Participant>{participant}</Participant>
            ))}
          </ParticipantsBox>
        ) : undefined}
      </div>

      <div id="authorName">{info.authorName}</div>
    </Section>
  );
}

const Section = styled(PlanInfoStyle)`
  ${(props) =>
    props.isPopUpOpen !== true &&
    css`
      #numParticipant {
        position: relative;
      }
    `}
`;

const ParticipantsBox = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;

  position: absolute;
  z-index: 1;
  left: 0;
  bottom: calc(${(props) => props.numParticipant} * -50px);

  background-color: ${(props) => props.theme.white};
  border-radius: 0 0 10px 10px;
`;

const Participant = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px;

  font-size: 15px;
  color: ${(props) => props.theme.bodyColor};
`;

export default PlanInfoView;
