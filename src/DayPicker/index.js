import Calendar from "./Calendar"
import { connect } from "react-redux"
import { DATE_CHANGE, CHANGE_MONTH } from "../redux/actionTypes"

const mapStateToProps = state => ({
    selectedDate: state.selectedDate,
    currentMonthDisplay: state.currentMonthDisplay,
    lastAction: state.lastAction
})
const mapDispatchToProps = dispatch => ({
    handleDayClick: day => dispatch({ type: DATE_CHANGE, day: day }),
    onChangeMonth: month => dispatch({ type: CHANGE_MONTH, month: month })
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Calendar)