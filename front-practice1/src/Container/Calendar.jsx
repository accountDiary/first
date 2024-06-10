import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"
import "../Css/Calendar.css"

function Calendar() {
    return(
        <div className="Calendar">
            <FullCalendar 
                defaultView="dayGridMonth" 
                plugins={[ dayGridPlugin, interactionPlugin ]}
                height={"79vh"}
            />
        </div>
    )

}
export default Calendar;
