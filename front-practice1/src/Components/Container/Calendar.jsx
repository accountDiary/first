import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "../../Css/Calendar.css";

function Calendar() {
    return(
        <div className="Calendar">
            <FullCalendar 
                defaultView="dayGridMonth" 
                plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
                events={[
                    {
                        title : '다이어리',
                        date: '2024-06-25'
                    },
                    {
                        title : '가계부',
                        date: '2024-06-25'
                    }
                ]}
                height={"85vh"}
            />
        </div>
    )

}
export default Calendar;
