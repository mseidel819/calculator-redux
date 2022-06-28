import React from "react";
// import { useState } from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "./store/theme-setter/theme.selector";
import { ThemeProvider } from "@mui/material";

import { darkThemeOptions } from "./themes/darkTheme.styles";
import { lightThemeOptions } from "./themes/lightTheme.styles";
import { discoThemeOptions } from "./themes/discoTheme.styles";
import {
  StyledContainer,
  StyledMiniContainer,
  StyledFooter,
} from "./App.styles";
import Header from "./components/header/header.component";
import AnswerBar from "./components/answer-bar/answer-bar.component";
import Keypad from "./components/keypad/keypad.component";

function App() {
  // const [themeSet, setThemeSet] = useState(0);

  // const themeToggler = () => {
  //   if (themeSet === 2) return setThemeSet(0);
  //   return setThemeSet(themeSet + 1);
  // };
  const { themeSet } = useSelector(selectTheme);

  const themeArr = [darkThemeOptions, lightThemeOptions, discoThemeOptions];

  /////////////////////////////////////////////////////////////////
  return (
    <ThemeProvider theme={themeArr[themeSet]}>
      <StyledContainer>
        <StyledMiniContainer role="main">
          <Header />
          <AnswerBar />
          <Keypad />
        </StyledMiniContainer>
        <StyledFooter>
          Challenge by &nbsp;
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            rel="noreferrer"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://seidelmatt.com/" target="_blank" rel="noreferrer">
            Matt Seidel
          </a>
          .
        </StyledFooter>
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
