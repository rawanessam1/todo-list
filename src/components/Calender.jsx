import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = ({ events }) => {
  const handleDateClick = (info) => {
    alert(`Clicked on date: ${info.dateStr}`);
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="timeGridDay"
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      slotMinTime="09:00:00"
      slotMaxTime="18:00:00"
      dateClick={handleDateClick}
      events={events}
      height="auto"
    />
  );
};

export default Calendar;
