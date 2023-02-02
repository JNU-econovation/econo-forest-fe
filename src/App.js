import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ThemeProvider as StyledThemeProvider,
  createGlobalStyle,
} from "styled-components";
import reset from "styled-reset";

import Theme from "./styles/Theme";
import routes from "./routes";
import Eat from "./pages/Eat";
import { useEffect, useState } from "react";
import clubsAPI from "./lib/api/clubsAPI";
import checkIpAddress from "./lib/utils/checkIpAddress";
import { useRecoilState, useRecoilValue } from "recoil";
import userIpAddress from "./recoil/userIpAddress";
import AuthAPI from "./lib/api/AuthAPI";

function AppRouter() {
  const [isAuthorized, setIsAuthorized] = useState(true);
  const [userIp, setUserIp] = useRecoilState(userIpAddress);
  const [isInClub, setIsInClub] = useState(false);

  const checkIsToken = () => {
    if (
      localStorage.getItem("accessToken") &&
      localStorage.getItem("refreshToken") &&
      localStorage.getItem("expiredTime")
    ) {
      return setIsAuthorized(true);
    } else {
      return setIsAuthorized(false);
    }
  };

  const checkIsInClub = async () => {
    setUserIp(await checkIpAddress());
    const isClubIp = await clubsAPI.checkIsInClub(userIp);
    console.log(isClubIp);
  };

  const redirectToSSO = async () => {
    await AuthAPI.redirectToSSO();
  };

  useEffect(() => {
    checkIsToken();
  }, []);

  useEffect(() => {
    if (!isAuthorized) {
      // sso 페이지로 이동
      redirectToSSO();
    } else {
      checkIsInClub();
    }
  }, [isAuthorized]);

  return (
    <Router>
      <Routes>
        <Route path={routes.home} element={<div>Home</div>} />
        <Route path={routes.eat} element={<Eat />} />
      </Routes>
    </Router>
  );
}

function App() {
  return (
    <StyledThemeProvider theme={Theme}>
      <GlobalStyle />
      <AppRouter />
    </StyledThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  input {
    padding: 0;
    margin: 0;
  }
  
  * {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
    font-weight: 400;
    font-family: 'Apple SD Gothic Neo', sans-serif;
  }
`;

export default App;
