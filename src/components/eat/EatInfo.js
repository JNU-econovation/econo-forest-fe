import styled from "styled-components";
import {useEffect, useState} from "react";

function EatInfo({onEditMode, info}) {
  const [eatInfo, setEatInfo] = useState({});


  useEffect(() => {
    if (!onEditMode) {
      setEatInfo(info);
    }
  }, [onEditMode])

  return (
    <Section>
      <Info>
        <TitleBox>
          <div className="info-header" id="id">번호</div>
          <div className="info-header" id="title">제목</div>
          <div className="info-header" id="date">날짜</div>
          <div className="info-header" id="time">시간</div>
          <div className="info-header" id="location">장소</div>
          <div className="info-header" id="participants">참여인원</div>
          <div className="info-header" id="author">글쓴이</div>
        </TitleBox>
        <InputBox>
          <div className="info" id="id">5</div>
          <div className="info" id="title">맛도리 돼지똥꼬 먹을 사람</div>
          <div className="info" id="date">2022.11.20</div>
          <div className="info" id="time">17시</div>
          <div className="info" id="location">후문</div>
          <div className="info" id="participants">5명</div>
          <div className="info" id="author">김수민</div>
        </InputBox>
      </Info>
      <Button><div>버튼</div></Button>
    </Section>
  )
};

const Section = styled.div`
  width: 100%;
  height: 120px;
  
  padding: 10px 0;
  
  display: grid;
  grid-template-columns: auto 15%;
  
  font-family: ${props => props.theme.mainFont};
`;

const Info = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  
`;

const TitleBox = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 3fr 1fr 1fr 1fr 1fr 1fr;
  
  background-color: ${props => props.theme.yellow};
  border: 1px solid ${props => props.theme.additiveColor};
  border-radius: 10px 10px 0 0;
  font-size: ${props => props.theme.bodyFontSize};
  
  .info-header {
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(0,0,0,0.1);
    font-weight: bold;
  }
  
  .info-header:nth-last-child(1) {
    border: none;
  }
`;

const InputBox = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 3fr 1fr 1fr 1fr 1fr 1fr;

  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.additiveColor};
  border-radius: 0 0 10px 10px;

  .info {
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid rgba(0,0,0,0.1);
  }

  .info:nth-last-child(1) {
    border: none;
  }
`;

const Button = styled.div`
  margin-left: 30px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  background-color: ${props => props.theme.orange};
  border: 1px solid ${props => props.theme.black};
  border-radius: 10px;
  
  div {
    color: ${props => props.theme.brightColor};
  }
`;

export default EatInfo;
