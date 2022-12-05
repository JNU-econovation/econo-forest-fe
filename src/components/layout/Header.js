import styled from "styled-components";
import MainLogoSrc from "../../images/MainLogo.webp";

function Header() {
  return (
    <MenuBar>
      <MainLogo src={MainLogoSrc}></MainLogo>
      <MenuDiv>
        <EachMenu>밥먹어요</EachMenu>
        <EachMenu>공부해요</EachMenu>
        <EachMenu>방명록</EachMenu>
        <EachMenu>랭킹</EachMenu>
        <EachMenu>사이트</EachMenu>
      </MenuDiv>
    </MenuBar>
  );
}

const MenuBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 7%;
  padding-right: 7%;
`;

const MainLogo = styled.img`
  width: 13%;
  object-fit: contain;
  cursor: pointer;
`;

const MenuDiv = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${(props) => props.theme.subtitleFontSize};
`;

const EachMenu = styled.div`
  padding: 20px;
  cursor: pointer;
`;

export default Header;
