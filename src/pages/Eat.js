import styled from "styled-components";

function Eat(){
  return (
    <Body>
      <Main>
        <div>메뉴 바</div>
        <div>밥 먹어요 컴포넌트</div>
      </Main>
      <div>동방 현황바 컴포넌트</div>
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  
  display: grid;
  grid-template-columns: auto 470px;
  
  font-family: ${props => props.theme.logoFont};
`

const Main = styled.div`
  display: flex;
  flex-direction: column;
  
  display: grid;
  grid-template-rows: 120px auto;
`;

export default Eat;
