import React from "react"
import { connect } from "react-redux"
import { CLEAR_TODO } from "../redux/actionTypes"
import ListItem from "./ListItem"
import { StyledTodoList, StyledNoEventContainer } from "./styled-components"
import EventAvailable from "@material-ui/icons/EventAvailable"

const TodoList = ({ emails, selectedDate, onClearTodo }) => {
  return (
    <StyledTodoList>
      {emails[selectedDate] ? 
        emails[selectedDate].map((d,i) => {
          return (
            <ListItem
              key={i}
              text={d}
              deleteItem={e => {
                e.preventDefault()
                const yesIWantToDeleteThis = window.confirm(`Supprimer ${d}, really ?`, "")
                if (yesIWantToDeleteThis)
                  return onClearTodo(selectedDate, d)
                return
              }}
            /> 
          )
        }) 
      : 
        <StyledNoEventContainer>
          <div><EventAvailable fontSize={"large"}/></div>
          <div>Rien de prévu ! <span role="img" aria-label="ghost">👻</span></div>
        </StyledNoEventContainer>
      }
    </StyledTodoList>
  )
}

const mapStateToProps = state => ({
  emails: state,
  selectedDate: state.selectedDate
})
const mapDispatchToProps = dispatch => ({
  onClearTodo: (day, todo) => dispatch({ type: CLEAR_TODO, day: day, todo: todo })
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)