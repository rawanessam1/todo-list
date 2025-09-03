import TaskColumn from "../components/upcoming/TaskColumn";
import MainLayout from "../components/layout/MainLayout"; 

function Today(){
    const loggedInUser = localStorage.getItem("username");
    return (
    <div style={{ display: "flex" }}>
        <MainLayout bgColor="bg-white">
            <div className="w-full">
                <h1 className="font-oswald text-4xl">Today</h1>
                <TaskColumn title="Today" userId={loggedInUser} />
            </div>
        </MainLayout>
    </div>
  );
}
export default Today;