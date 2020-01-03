import TopBarItem from "./TopBarItem"
import { connect } from "react-redux"
import { ADD_TODO, CHANGE_MONTH } from "../redux/actionTypes"

const mapStateToProps = state => ({
    selectedDate: state.selectedDate,
    currentMonthDisplay: state.currentMonthDisplay
})
const mapDispatchToProps = dispatch => ({
    onAddTodo: (day, todo) => dispatch({ type: ADD_TODO, day: day, todo: todo }),
    onChangeMonth: month => dispatch({ type: CHANGE_MONTH, month: month })
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TopBarItem)