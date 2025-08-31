import { Button } from "antd";
import MainLayout from "../components/layout/MainLayout"; 
import Calendar from "../components/Calender";

const Calender = () => {
  const events = [
    {
      title: "Database create for company",
      start: "2025-09-17T09:00:00",
      end: "2025-09-17T12:00:00",
      color: "#d4f1f4",
    },
    {
      title: "Meet work team",
      start: "2025-09-17T11:00:00",
      end: "2025-09-17T12:30:00",
      color: "#b2ebf2",
    },
    {
      title: "Client presentation",
      start: "2025-09-17T15:00:00",
      end: "2025-09-17T16:00:00",
      color: "#f8d7da",
    },
  ];

  const today = new Date();
  const day = today.getDate();
  const year = today.getFullYear();
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const month = months[today.getMonth()];
  const formattedDate = `${day} ${month} ${year}`;

  return (
    <MainLayout bgColor="bg-white">
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col justify-center gap-14 w-full">
          <div className="CalenderHeader flex flex-row justify-between">
            <h1 className="text-3xl font-bold mb-6">{formattedDate}</h1>
            <Button htmlType="submit" type="ghost" className="!rounded-lg !border-black">Add Event</Button>          
          </div>
          <Calendar events={events} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Calender;

