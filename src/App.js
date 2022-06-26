import React from "react";
// import { useState } from "react";
import { ThemeProvider } from "@mui/material";

import { darkThemeOptions } from "./themes/darkTheme.styles";
import { StyledContainer, StyledMiniContainer } from "./App.styles";
import Header from "./components/header/header.component";
import AnswerBar from "./components/answer-bar/answer-bar.component";
import Keypad from "./components/keypad/keypad.component";

function App() {
  // const [calc, setCalc] = useState("");
  // const [result, setResult] = useState("");

  // const operators = ["+", "-", "/", "*"];
  // const deci = ["."];
  ///////////////////////////////////////////////////////////////////////////////////

  // if (
  //   operators.includes(calc.slice(-1)) &&
  //   operators.includes(calc.slice(-2, -1)) &&
  //   calc.slice(-1) !== "-"
  // ) {
  //   setCalc(calc.slice(0, -2).concat(calc.slice(-1)));
  // }

  /////////////////////////////////////////////////////////////////
  return (
    <ThemeProvider theme={darkThemeOptions}>
      <StyledContainer>
        <StyledMiniContainer>
          <Header />
          <AnswerBar />
          <Keypad />
        </StyledMiniContainer>
        <footer class="attribution">
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
        </footer>
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
