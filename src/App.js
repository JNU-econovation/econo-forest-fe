import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import Theme from "./styles/Theme";
import routes from "./routes";
import Eat from "./pages/Eat";

function AppRouter() {
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
  
  * {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
  }
  
  body {
    font-weight: 400;
    font-family: 'Apple SD Gothic Neo', sans-serif;
  }
`;

export default App;
