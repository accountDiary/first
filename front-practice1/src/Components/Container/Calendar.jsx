import React from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import "../../Css/Calendar.css";

function Calendar({ onDateClick }) {

    return(
        <div className="Calendar">
            <FullCalendar 
                initialView="dayGridMonth" 
                plugins={[ dayGridPlugin, interactionPlugin ]}
                // events={[
                //     {
                //         title : '다이어리',
                //         date: '2024-06-25'
                //     },
                //     {
                //         title : '가계부',
                //         date: '2024-06-25'
                //     }
                // ]}
                dateClick={onDateClick}
                height={"85vh"}
            />
        </div>
    )

}
export default Calendar;
