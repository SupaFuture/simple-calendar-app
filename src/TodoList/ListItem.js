import React from "react"
import { 
    StyledListItemContainer,
    StyledTodo,
    StyledAction
} from "./styled-components"
import ClearIcon from "@material-ui/icons/DeleteForever"

const ListItem = ({ text, deleteItem }) => {
    return (
      <StyledListItemContainer>
        <StyledTodo>
          {text}
        </StyledTodo>
        <StyledAction onClick={deleteItem}>
          <ClearIcon/>
        </StyledAction>
      </StyledListItemContainer>
    )
}

export default ListItem