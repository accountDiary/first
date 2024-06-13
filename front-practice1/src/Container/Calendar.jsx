import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button/Button";

import "../Css/Calendar.css"

function Calendar() {
    return(
        <>
            <span className="searchBox">
                <input type="text" placeholder="닉네임을 입력하세요." />
                <Button
                    variant="search"
                    size="md"
                >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
            </span>
            <div className="Calendar">
                <FullCalendar
                    plugins={[ dayGridPlugin, interactionPlugin ]}
                    height={"79vh"}
                />
            </div>
        </>
    )

}
export default Calendar;
