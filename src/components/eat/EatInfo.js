import styled from "styled-components";
import {useEffect, useState} from "react";
import {useRecoilState} from "recoil";
import eatInfoState from "../../recoil/atoms/eatInfoState";

function EatInfo({onEditMode, info}) {
  const [eatInfo, setEatInfo] = useRecoilState(eatInfoState);
  const [isPastDeadline, setIsPastDeadline] = useState(false);

  const onButtonClick = () => {
    if (isPastDeadline !== false) {
      return;
    }

    /* 버튼
    * 작성자일 경우 => 삭제 및 수정
    *
    * 작성자가 아니고 참여 신청하지 않았을 경우 => 참여
    * 작성자가 아니고 참여 신청했을 경우 => 취소 (불참?)
    *
    * 시간이 지났을 경우 => 마감
    * */
  };

  useEffect(() => {
    // const now = new Date();
    // if (now - 1000 < eatInfo.date) {
    //   setIsPastDeadline(false);
    // }

  }, [onEditMode, eatInfo])

  return (
    <Section>
      <Info>
        <TitleBox status={isPastDeadline}>
          <div className="info-header" id="id">번호</div>
          <div className="info-header" id="title">제목</div>
          <div className="info-header" id="date">날짜</div>
          <div className="info-header" id="time">시간</div>
          <div className="info-header" id="location">장소</div>
          <div className="info-header" id="participants">참여인원</div>
          <div className="info-header" id="author">글쓴이</div>
        </TitleBox>
        <InputBox>
          <div className="info" id="id">{eatInfo.id}</div>
          <div className="info" id="title">{eatInfo.title}</div>
          <div className="info" id="date">{eatInfo.date}</div>
          <div className="info" id="time">{eatInfo.date}</div>
          <div className="info" id="location">{eatInfo.location}</div>
          <div className="info" id="participants">{eatInfo.numParticipant}명</div>
          <div className="info" id="author">{eatInfo.authorName}</div>
        </InputBox>
      </Info>
      {eatInfo.isAuthor && !isPastDeadline ? (
        <IsAuthorButton>
          <div className="edit-button">수정</div>
          <div className="delete-button">삭제</div>
        </IsAuthorButton>
      ) : (
        <IsNotAuthorButton status={isPastDeadline} onClick={onButtonClick}>
          <div>{isPastDeadline ? "마감" : "신청"}</div>
        </IsNotAuthorButton>
      )}
    </Section>
  )
};

const Section = styled.div`
  width: 100%;
  height: 120px;
  
  position: relative;
  z-index: 1;
  
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
  
  background-color: ${props => props.status ? props.theme.grey : props.theme.yellow};
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
    color: ${props => props.theme.bodyColor};
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
  
  border: 1px solid ${props => props.theme.black};
  border-radius: 10px;
  
  color: ${props => props.theme.highlightColor};
`;

const IsAuthorButton = styled(Button)`
  flex-direction: column;
  
  div {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    cursor: pointer;
  }
  
  .edit-button {
    background-color: ${props => props.theme.yellow};
    color: ${props => props.theme.bodyColor};
    border-radius: 10px 10px 0 0;
    border-bottom: 2px solid ${props => props.theme.black};
  }
  
  .delete-button {
    background-color: ${props => props.theme.white};
    color: ${props => props.theme.additiveColor};
    border-radius: 0 0 10px 10px;
  }
`;

const IsNotAuthorButton = styled(Button)`
  font-weight: bold;
  background-color: ${props => props.status ? props.theme.grey : props.theme.orange};
  cursor: ${props => props.status ? "inherit" : "pointer"};
`;

export default EatInfo;
