import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = ({ events }) => {

  return (
    <div className="w-full min-h-[400px] md:min-h-[600px] lg:min-h-[700px] overflow-auto p-4">
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      slotMinTime="00:00:00"
      slotMaxTime="24:00:00"
      slotDuration="01:00:00"
      allDaySlot={false} 
      events={events}
      height="100%"
      contentHeight="auto"
      aspectRatio={1.5}
      className="w-full min-w-[300px]"
    />
    </div>
  );
};

export default Calendar;
