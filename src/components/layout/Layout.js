import styled from "styled-components";
import Header from "./Header";

function Layout({ children }) {
  return (
    <Body>
      <Main>
        <Header />
        {children}
      </Main>
      <div>동방 현황바 컴포넌트</div>
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: auto 24%;
`;

const Main = styled.div`
  display: grid;
  grid-template-rows: 11% auto;
`;

export default Layout;
