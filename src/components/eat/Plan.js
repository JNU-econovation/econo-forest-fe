import styled from "styled-components";
import { useEffect, useState } from "react";
import PlanButton from "./PlanButton";
import PlanInfoView from "./PlanInfoView";

function Plan({ planInfo }) {
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const now = new Date();
    if (now - 1000 < planInfo.date) {
      setIsClosed(false);
    }
  }, [planInfo]);

  return (
    <Section>
      <InfoSection>
        <Header status={isClosed}>
          <div id="id">번호</div>
          <div id="title">제목</div>
          <div id="date">날짜</div>
          <div id="time">시간</div>
          <div id="location">장소</div>
          <div id="participants">참여인원</div>
          <div id="author">글쓴이</div>
        </Header>

        <PlanInfoView info={planInfo} />
      </InfoSection>

      <PlanButton isClosed={isClosed} info={planInfo} />
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

const InfoSection = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 3fr 1fr 1fr 1fr 1fr 1fr;

  background-color: ${(props) =>
    props.status ? props.theme.grey : props.theme.yellow};
  border: 1px solid ${(props) => props.theme.additiveColor};
  border-radius: 10px 10px 0 0;

  font-size: ${(props) => props.theme.bodyFontSize};
  color: ${(props) => props.theme.highlightColor};

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    font-weight: bold;
  }

  div:nth-last-child(1) {
    border: none;
  }
`;

export default Plan;
