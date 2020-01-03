import React from "react"
import { MONTHS_DISPLAYED, numberOfMonthsDisplayed } from "./../utilities"
import { 
    StyledButton, 
    StyledHeader, 
    StyledNavigation, 
    StyledWeekDaysHeader 
} from "./styled-components"
import ArrowForward from "@material-ui/icons/ArrowForwardIosTwoTone"
import ArrowBack from "@material-ui/icons/ArrowBackIosTwoTone"
import Add from "@material-ui/icons/Add"

const TopBarItem = ({ 
    currentMonthDisplay, 
    selectedDate, 
    onChangeMonth, 
    onAddTodo 
}) => (
    <div>
        <StyledHeader>
            <div>{MONTHS_DISPLAYED[currentMonthDisplay].month.substring(0,3)}{". "}{MONTHS_DISPLAYED[currentMonthDisplay].year}</div>
            <StyledNavigation>
                <StyledButton
                    disabled={currentMonthDisplay === 0}
                    onClick={e => {
                        e.preventDefault()
                        onChangeMonth(currentMonthDisplay - 1)
                    }}
                >
                    <ArrowBack/>
                </StyledButton>
                <StyledButton
                    disabled={currentMonthDisplay === numberOfMonthsDisplayed - 1}
                    onClick={e => {
                        e.preventDefault()
                        onChangeMonth(currentMonthDisplay + 1)
                    }}
                >
                    <ArrowForward/>
                </StyledButton>
            </StyledNavigation>
            <div>
                <StyledButton
                    add
                    onClick={e => {
                        e.preventDefault()
                        const todo = prompt("Y'a quoi mec ?", "")
                        if (todo === null || todo === "" || todo === undefined) 
                            return
                        return onAddTodo(selectedDate, todo)
                    }}
                >
                    <Add/>
                </StyledButton>
            </div>
        </StyledHeader>
        <StyledWeekDaysHeader>
            {['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'].map((d,i) => <div key={i}>{d}</div>)}
        </StyledWeekDaysHeader>
    </div>
)

export default TopBarItem