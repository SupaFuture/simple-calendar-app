import styled, { css } from "styled-components"

export const StyledHeader = styled.div`
    width: 95%;
    margin: 0 auto;
    height: 10vh;
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    border-bottom: white 0.5px solid

    > div:first-child {
        font-size: 1.3rem;
        min-width:7rem;
    }
`

export const StyledNavigation = styled.div`
    display: flex;
    flex-wrap:nowrap;
`

export const StyledButton = styled.button`
    cursor: pointer;
    z-index: 1;
    outline: none;
    background: transparent;
    color: white;
    
    font-weight: 300;
    border:none;
    margin:1rem

    ${props => props.add && css`
        font-size: 2rem;
        width:3rem
    `}

    @media (max-width: 350px) {
        margin: 0rem
    }
`

export const StyledWeekDaysHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width:80%;
    margin:0 auto;
    border-bottom: white 0.5px solid;
    font-weight: 300

    > div {
        width:calc(100vw / 15);
        height:calc(100vh / 19);
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0.5em
    }
`

