import { DATE_CHANGE, ADD_TODO, CLEAR_TODO, CHANGE_MONTH } from "./../actionTypes"

let today = new Date()
let dd = String(today.getDate()).padStart(2, '0')
let mm = String(today.getMonth() + 1).padStart(2, '0') 
let yyyy = String(today.getFullYear())
let todayToString = yyyy + "-" + mm + "-" + dd

const initialState = {
    selectedDate: yyyy + "-" + mm + "-" + dd,
    currentMonthDisplay: 0,
    [todayToString]: JSON.parse(localStorage.getItem(todayToString)),
    lastAction: null
}

export default function(state = initialState, action) {
    switch (action.type) {

        case CHANGE_MONTH: {
            return {
                ...state,
                currentMonthDisplay: action.month
            }
        }
        case DATE_CHANGE: {
            let dd = String(action.day.getDate()).padStart(2, '0');
            let mm = String(action.day.getMonth() + 1).padStart(2, '0'); 
            let yyyy = String(action.day.getFullYear());
            let theHijoDePutaDate = yyyy+'-'+mm+'-'+dd
            return {
                lastAction: state.lastAction,
                currentMonthDisplay: state.currentMonthDisplay,
                selectedDate: theHijoDePutaDate,
                [theHijoDePutaDate]: JSON.parse(localStorage.getItem(theHijoDePutaDate))
            }
        }
        case ADD_TODO: {
            if (localStorage.getItem(action.day)) {
                const todos = JSON.parse(localStorage.getItem(action.day))
                localStorage.setItem(
                    action.day, 
                    JSON.stringify(todos.concat(action.todo))
                )
                return {
                    ...state,
                    [action.day]: [...state[action.day], action.todo],
                    lastAction: `add__${action.day}__current-length:${state[action.day].length + 1}`
                }
            } else {
                localStorage.setItem(
                    action.day, 
                    JSON.stringify([action.todo])
                )
                return {
                    ...state,
                    [action.day]: [action.todo],
                    lastAction: `add__${action.day}__current-length:${state[action.day] ? state[action.day].length : 1}`
                }
            }
        }
        case CLEAR_TODO: {
            const todos = JSON.parse(localStorage.getItem(action.day))
            const storageLength = JSON.parse(localStorage.getItem(action.day)).length
            if (storageLength === 1) {
                localStorage.removeItem(action.day)
                return {
                    ...state,
                    [action.day]: null,
                    lastAction: `delete__${action.day}__current-length:0`
                }
            } else {
                localStorage.setItem(
                    action.day, 
                    JSON.stringify(todos.filter(d => String(action.todo) !== d))
                )
                return {
                    ...state,
                    [action.day]: state[action.day].filter(d => d !== action.todo),
                    lastAction: `delete__${action.day}__current-length:${state[action.day].length - 1}`
                }
            }
            
        }
        default: return state;
    }
}

// localStorage.setItem("2020-01-02", 
// JSON.stringify([
//     "Can you pick up some ice cream...",
//     "Your library books are overdue",
//     "Want to grab coffee after work...",
//     "Théo Want to buy a milkshake...",
//     "The fish is in the rooftop...",
//     "The fish is in the rooftop...",
//     "The fish is in the rooftop...",
//     "The fish is in the rooftop...",
//     "The fish is in the rooftop...",
//   ])
// )
