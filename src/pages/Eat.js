import styled from "styled-components";

function Eat(){
  return (
    <Body>
      <Main>
        // 메뉴바 (나비게이션 바) 컴포넌트
        // 밥 먹어요 컴포넌트
      </Main>
      // 동방 현황바 컴포넌트
    </Body>
  );
}

const Body = styled.div`
  width: 100vh;
  height: 100vh;
  
  display: grid;
  grid-template-columns: auto 470px;
`

const Main = styled.div`
  width: 100%;
  height: 100%;
`;

export default Eat;
