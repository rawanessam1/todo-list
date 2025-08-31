import TaskColumn from "../components/upcoming/TaskColumn";
import MainLayout from "../components/layout/MainLayout"; 

function Upcoming() {
  return (
    <div style={{ display: "flex" }}>
      <MainLayout bgColor="bg-white">
      <div className="w-full">
        <h1 className="font-oswald text-4xl">Upcoming</h1>
        <div className="flex flex-col gap-6 w-full">
          <TaskColumn title="Today" />
          <div className="flex flex-row justify-between">
            <TaskColumn title="Tomorrow" className="flex-1"/>
            <TaskColumn title="This Week" className="flex-1"/>
          </div>
        </div>
      </div>
     </MainLayout>
    </div>
  );
}
export default Upcoming;
