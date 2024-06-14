import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"

import "../Css/Calendar.css"

function Calendar() {

    function handleDateClick(props) {
        alert(props.dateStr)
    }

    return(
        <>
            <div className="Calendar">
                <FullCalendar
                    plugins={[ dayGridPlugin, interactionPlugin ]}
                    height={"79vh"}
                    dateClick={handleDateClick}
                />
            </div>
        </>
    )

}
export default Calendar;
