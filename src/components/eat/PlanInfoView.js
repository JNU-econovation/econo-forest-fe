import PlanInfoStyle from "../../styles/eat/PlanInfoStyle";
import styled, { css } from "styled-components";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import isPopUpOpenState from "../../recoil/eat/isPopUpOpenState";
import EAT_LOCATIONS from "../../constant/EAT_LOCATIONS";
import { EpochSecondToDateObject } from "../../lib/utils/EpochConverter";

function PlanInfoView({ info }) {
  const [isHover, setIsHover] = useState(false);
  const isPopUpOpen = useRecoilValue(isPopUpOpenState);

  const [numParticipants, setNumParticipants] = useState(0);
  const [participantArray, setParticipantArray] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    setNumParticipants(info.participants.participants.length);
    setParticipantArray(info.participants.participants);
  }, [info.participants.participants]);

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
    <Section isPopUpOpen={isPopUpOpen}>
      <div id="id">{info.eatBoardId}</div>
      <div id="title">{info.title}</div>
      <div id="date">{date}</div>
      <div id="time">{time}</div>
      <div id="location">{EAT_LOCATIONS.KOREAN[info.locationCategory]}</div>
      <div
        id="numParticipant"
        onMouseOver={() => {
          setIsHover(true);
        }}
        onMouseOut={() => {
          setIsHover(false);
        }}
      >
        {numParticipants}

        {isPopUpOpen ? (
          <ParticipantsBox active={isHover} numParticipant={numParticipants}>
            {participantArray.map((participant) => (
              <Participant key={participant.name}>
                {participant.name}
              </Participant>
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

  #numParticipant {
    cursor: pointer;
  }
`;

const ParticipantsBox = styled.div`
  width: 100%;

  visibility: ${(props) => (!props.active ? "hidden" : "visible")};
  display: flex;
  flex-direction: column;

  position: absolute;
  z-index: 100;
  left: 0;
  bottom: calc(${(props) => props.numParticipant} * -50px);

  background-color: ${(props) => props.theme.white};
  border-radius: 0 0 10px 10px;

  ${(props) =>
    props.active &&
    css`
      animation: ${props.theme.opacityAnimationKeyframe} 0.3s ease-in-out;
    `}
`;

const Participant = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px;

  font-size: 15px;
  color: ${(props) => props.theme.bodyColor};
`;

export default PlanInfoView;
