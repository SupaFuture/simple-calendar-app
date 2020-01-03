import React from 'react'
import DayPicker from 'react-day-picker'
import "./style.css"
import { 
    MONTHS, 
    WEEKDAYS_LONG, 
    WEEKDAYS_SHORT, 
    FIRST_DAY_OF_WEEK, 
    numberOfMonthsDisplayed 
} from "./../utilities"
import SwipeableViews from "react-swipeable-views"

const RenderDay = (day) => {
    const date = day.getFullYear() 
            + "-" + String((Number(day.getMonth())+1)).padStart(2, '0') 
            + "-" + String(day.getDate()).padStart(2, '0')
    return (
        <div className="cellStyle">
            <div>{day.getDate()}</div>
            <div style={{display:"flex", flexDirection:"row"}}>
                {JSON.parse(localStorage.getItem(date)) 
                    ?   JSON.parse(localStorage.getItem(date)).length === 0 ? <div style={{color:"transparent"}}>∙</div> :
                        JSON.parse(localStorage.getItem(date)).map((d, i) => i < 3 && <div key={i}>∙</div>)
                    : <div style={{color:"transparent"}}>∙</div> }
            </div>
        </div>
    )
}

const Calendar = ({ 
    selectedDate, 
    handleDayClick, 
    onChangeMonth, 
    currentMonthDisplay 
}) => (
    <div>
        <SwipeableViews 
            index={currentMonthDisplay}
            onChangeIndex={index => onChangeMonth(index)} 
            animateHeight={true}
            >
            {[...Array(numberOfMonthsDisplayed)].map((d, i) => 
                <DayPicker
                    key={i}
                    renderDay={RenderDay}
                    locale={'fr'}
                    months={MONTHS['fr']}
                    weekdaysLong={WEEKDAYS_LONG['fr']}
                    weekdaysShort={WEEKDAYS_SHORT['fr']}
                    firstDayOfWeek={FIRST_DAY_OF_WEEK['fr']}
                    canChangeMonth={false}
                    numberOfMonths={1}
                    showWeekDays={false}
                    selectedDays={new Date(selectedDate)}
                    onDayClick={handleDayClick}
                    month={new Date(new Date().getFullYear(), new Date().getMonth() + i)}
                />
            )}
        </SwipeableViews>
    </div>
)

export default Calendar