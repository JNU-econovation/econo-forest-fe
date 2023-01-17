import styled from "styled-components";
import MainLogoSrc from "../../images/MainLogo.webp";
import EconoLogoSrc from "../../images/EconoLogo.webp";
import BeepLogoSrc from "../../images/BeepLogo.webp";
import TeconoLogoSrc from "../../images/TeconoLogo.webp";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isHover, setIsHover] = useState(false);
  const siteList = [
    [EconoLogoSrc, "https://econovation.kr/about"],
    [BeepLogoSrc, ""],
    [TeconoLogoSrc, ""],
  ];
  return (
    <MenuBar>
      <Link style={{ width: "13%", margin: "auto 0" }} to={"/main"}>
        <MainLogo src={MainLogoSrc}></MainLogo>
      </Link>
      <MenuDiv>
        <EachMenu>
          <Link to={"/eat"}>밥먹어요</Link>
        </EachMenu>
        <EachMenu>
          <Link to={"/study"}>공부해요</Link>
        </EachMenu>
        <EachMenu>
          <Link to={"/guestbook"}>방명록</Link>
        </EachMenu>
        <EachMenu>
          <Link to={"/rank"}>랭킹</Link>
        </EachMenu>
        <SiteList
          onMouseOver={() => {
            setIsHover(true);
          }}
          onMouseOut={() => {
            setIsHover(false);
          }}
        >
          사이트
          {isHover ? (
            <SiteContent>
              <div>
                <SiteLogo
                  src={EconoLogoSrc}
                  onClick={() => {
                    window.open("https://econovation.kr/about");
                  }}
                ></SiteLogo>
              </div>
              <div>
                <SiteLogo
                  src={BeepLogoSrc}
                  onClick={() => {
                    window.open("https://econovation.kr/about");
                  }}
                ></SiteLogo>
              </div>
              <div>
                <SiteLogo
                  src={TeconoLogoSrc}
                  onClick={() => {
                    window.open("https://econovation.kr/about");
                  }}
                ></SiteLogo>
              </div>
            </SiteContent>
          ) : undefined}
        </SiteList>
      </MenuDiv>
    </MenuBar>
  );
}

const MenuBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 7%;
  padding-right: 30px;
`;

const MainLogo = styled.img`
  width: 100%;
  object-fit: contain;
  cursor: pointer;
`;

const MenuDiv = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${(props) => props.theme.logoFont};
  font-size: ${(props) => props.theme.subtitleFontSize};
`;

const EachMenu = styled.div`
  padding: 20px;
  margin: 15px;
  cursor: pointer;
`;

const SiteList = styled.div`
  padding: 20px;
  margin: 15px;
  cursor: pointer;
`;

const SiteContent = styled.div`
  position: absolute;
  right: 24.8%;
  top: 8%;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  z-index: 1;
`;

const SiteLogo = styled.img`
  width: 150px;
`;
export default Header;
