import styled from "styled-components";

import EatInfo from "../components/eat/EatInfo";
import plusIcon from '../images/Icon feather-plus-circle@2x.webp';
import LTree from '../images/L_tree@2x.webp';
import RTree from '../images/R_tree@2x.webp';

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
          <EatInfo />
          <EatInfo />
          <EatInfo />

          <img className="left-tree" src={LTree} />
          <img className="right-tree" src={RTree} />
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
  grid-template-rows: 100px auto;
`;

const Section = styled.div`
  padding: 0 7%;
  background-color: ${props => props.theme.green};
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  position: relative;
  
  .right-tree, .left-tree {
    width: 10%;
    bottom: 3%;
    position: absolute;
    object-fit: contain;
  }
  
  .right-tree {
    right: 2.5%;
  }
  
  .left-tree {
    left: 2.5%;
  }
`;

const TitleBox = styled.div`
  width: 100%;
  padding-bottom: 25px;
  
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  
  color: ${props => props.theme.brightColor};
  font-family: ${props => props.theme.logoFont};
  font-size: ${props => props.theme.titleFontSize};
  
  .title {
    padding-right: 9px;
  }
  
  .plus-icon {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }
`;

export default Eat;
