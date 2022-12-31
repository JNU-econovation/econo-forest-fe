import styled from "styled-components";

function PlanInfoHeader({ isClosed }) {
  return (
    <Section status={isClosed}>
      <div id="id">번호</div>
      <div id="title">제목</div>
      <div id="date">날짜</div>
      <div id="time">시간</div>
      <div id="location">장소</div>
      <div id="participants">참여인원</div>
      <div id="author">글쓴이</div>
    </Section>
  );
}

const Section = styled.div`
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

export default PlanInfoHeader;
