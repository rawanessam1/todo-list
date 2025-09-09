import { useState, useEffect } from "react";
import MainLayout from "../components/layout/MainLayout";
import Calendar from "../components/Calender";
import dayjs from "dayjs";

const USER_ID = localStorage.getItem("username") || "user1";

const CalendarPage = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = () => {
    const prefix = `tasks_${USER_ID}_`;
    const allEvents = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key.startsWith(prefix)) continue;

      const tasks = JSON.parse(localStorage.getItem(key) || "[]");
      tasks.forEach(task => {
        if (task.text && task.date) {
           allEvents.push({
            title: task.text,
            start: dayjs(task.date).toISOString(),
            allDay: false,
            color: task.done ? "#34d399" : "#f87171", textColor: "#ffffff"
          });

        }
      });
    }

    setEvents(allEvents);
  };

  useEffect(() => {
    fetchEvents();

    const handleTasksUpdate = () => fetchEvents();
    window.addEventListener("tasksUpdated", handleTasksUpdate);

    return () => window.removeEventListener("tasksUpdated", handleTasksUpdate);
  }, []);

  return (
    <MainLayout bgColor="bg-white">
      <div className="flex justify-center items-center h-full p-10">
        <div className="flex flex-col gap-14 w-full">
          <Calendar events={events} />
        </div>
      </div>
    </MainLayout>
  );
};

export default CalendarPage;
