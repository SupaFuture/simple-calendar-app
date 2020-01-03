import styled from "styled-components"

export const StyledListItemContainer = styled.div`
    border-bottom: 1px solid white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const StyledTodo = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  text-transform: uppercase;
  font-weight:200
`

export const StyledAction = styled.button`
  cursor: pointer;
  outline:none;
  border: none;
  border-radius: 4px;
  min-width: 4rem;
  background-color: #ef5350;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    //background:black
  }
`

export const StyledTodoList = styled.div`
  width: 100%;
  height: auto;
  max-width: 700px;
  margin: 0 auto; 
  border-top: 1px solid white;

  @media (max-width: 500px) {
    font-size:0.9rem
  }
`

export const StyledNoEventContainer = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  padding: 2rem

  & > div {
    margin: 0.3rem
  }
`