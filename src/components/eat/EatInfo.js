import styled from "styled-components";
import { useEffect, useState } from "react";
import InfoButton from "./InfoButton";
import { useRecoilState } from "recoil";
import isInfoEditableState from "../../recoil/atoms/eat/isInfoEditableState";

function EatInfo({ info }) {
  const [isEditMode, setIsEditMode] = useRecoilState(isInfoEditableState);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    // const now = new Date();
    // if (now - 1000 < eatInfo.date) {
    //   setIsPastDeadline(false);
    // }
  }, [isEditMode, info]);

  return (
    <Section>
      <Info>
        <TitleBox status={isClosed}>
          <div className="info-header" id="id">
            번호
          </div>
          <div className="info-header" id="title">
            제목
          </div>
          <div className="info-header" id="date">
            날짜
          </div>
          <div className="info-header" id="time">
            시간
          </div>
          <div className="info-header" id="location">
            장소
          </div>
          <div className="info-header" id="participants">
            참여인원
          </div>
          <div className="info-header" id="author">
            글쓴이
          </div>
        </TitleBox>
        <InputBox>
          <div className="info" id="id">
            {info.id}
          </div>
          <div className="info" id="title">
            {info.title}
          </div>
          <div className="info" id="date">
            {info.date}
          </div>
          <div className="info" id="time">
            {info.date}
          </div>
          <div className="info" id="location">
            {info.location}
          </div>
          <div className="info" id="participants">
            {info.numParticipant}명
          </div>
          <div className="info" id="author">
            {info.authorName}
          </div>
        </InputBox>
      </Info>
      <InfoButton isClosed={isClosed} info={info} />
    </Section>
  );
}

const Section = styled.div`
  width: 100%;
  height: 120px;

  padding: 10px 0;

  display: grid;
  grid-template-columns: auto 15%;

  font-family: ${(props) => props.theme.mainFont};
`;

const Info = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const TitleBox = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 3fr 1fr 1fr 1fr 1fr 1fr;

  background-color: ${(props) =>
    props.status ? props.theme.grey : props.theme.yellow};
  border: 1px solid ${(props) => props.theme.additiveColor};
  border-radius: 10px 10px 0 0;
  font-size: ${(props) => props.theme.bodyFontSize};

  .info-header {
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    font-weight: bold;
  }

  .info-header:nth-last-child(1) {
    border: none;
  }
`;

const InputBox = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 3fr 1fr 1fr 1fr 1fr 1fr;

  background-color: ${(props) => props.theme.white};
  border: 1px solid ${(props) => props.theme.additiveColor};
  border-radius: 0 0 10px 10px;

  .info {
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    color: ${(props) => props.theme.bodyColor};
  }

  .info:nth-last-child(1) {
    border: none;
  }
`;

export default EatInfo;
