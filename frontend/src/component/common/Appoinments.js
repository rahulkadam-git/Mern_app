import React from "react";
import CreateAppoinments from "./CreateAppoinments";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

function Appoinments(props) {
  return (
    <div className="Appoinments">
      <CreateAppoinments />
      <FullCalendar
        defaultView="dayGridMonth"
        headerToolbar={{
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
      />
    </div>
  );
}

export default Appoinments;
