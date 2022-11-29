import styled from "styled-components";

import plusIcon from '../images/Icon feather-plus-circle.webp'
import EatInfo from "../components/eat/EatInfo";

function Eat(){
  return (
    <Body>
      <Main>
        <div>메뉴 바</div>
        <Section>
          <TitleBox>
            <div className="title">밥먹어요</div>
            <img className="plus-icon" src={plusIcon} />
          </TitleBox>
          <EatInfo />
        </Section>
      </Main>
      <div>동방 현황바 컴포넌트</div>
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  
  display: grid;
  grid-template-columns: auto 25%;
  
  font-family: ${props => props.theme.logoFont};
`

const Main = styled.div`
  display: grid;
  grid-template-rows: 120px auto;
`;

const Section = styled.div`
  padding: 7.5%;
  background-color: ${props => props.theme.green};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TitleBox = styled.div`
  width: 100%;
  padding-bottom: 25px;
  
  display: flex;
  justify-content: flex-start;
  align-items: center;
  
  color: ${props => props.theme.brightColor};
  font-family: ${props => props.theme.logoFont};
  font-size: ${props => props.theme.titleFontSize};
  
  .title {
    padding-right: 9px;
  }
  
  .plus-icon {
    width: 20px;
    height: 20px;
    object-fit: cover;
  }
`;

export default Eat;
