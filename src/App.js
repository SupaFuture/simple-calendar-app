import React from 'react'
import Header from "./Header"
import TodoList from "./TodoList"
import DayPicker from "./DayPicker"
import Bounce from 'react-reveal/Bounce'
import GlobalStyle from "./GlobalStyle"
import styled from "styled-components"

const StyledAppContainer = styled.div``

function App() {
  return (
    <StyledAppContainer>
      <GlobalStyle />
      <Header/>
      <DayPicker/> 
      <Bounce bottom>
        <TodoList/>
      </Bounce>
    </StyledAppContainer>
  );
}

export default App;
