import { useState } from "react";
import { Checkbox, Input, Button } from "antd";
import { IoAddCircleOutline } from "react-icons/io5";
import { FiXOctagon } from "react-icons/fi";

function TaskColumn({ title }) {
  const [tasks, setTasks] = useState([]); {/*  tasks is to save tasks, setTasks is to change tasks data */}

  return (
    <div className="flex-1 m-2.5 p-8 border border-black/60 rounded-4xl">
      <h3 className="font-oswald text-3xl">{title}</h3>
      <Button
        type="primary"
        onClick={() => setTasks([...tasks, { text: "", done: false, editing: true }])} /* ...tasks saves current tasks and add new one to them */
        className="!bg-white !text-black !w-full !flex !border !border-black/40 !rounded-xl !justify-start" 
      >
        <IoAddCircleOutline className="text-xl"/> Add new task
      </Button>

      {tasks.map((task, i) => (
        <div key={i} className="flex items-center mb-2 border-b border-black/40 p-1">
          <Checkbox
            checked={task.done}
            onChange={() => {
              const newTasks = [...tasks]; /* make new list of current tasks */
              newTasks[i].done = !newTasks[i].done; /* change the selected task from done to undone or undone to done */
              setTasks(newTasks);
            }}
            className="!mr-2"
          />

          {task.editing ? (
            <Input
              defaultValue={task.text}
              autoFocus
              onBlur={(e) => {
                const newTasks = [...tasks];
                newTasks[i].text = e.target.value;
                newTasks[i].editing = false;
                setTasks(newTasks);
              }}
              onPressEnter={(e) => {
                const newTasks = [...tasks];
                newTasks[i].text = e.target.value;
                newTasks[i].editing = false;
                setTasks(newTasks);
              }}
              className="!border-none !shadow-none !focus:border-none"
            />
          ) : (
            <span
              onClick={() => {
                const newTasks = [...tasks];
                newTasks[i].editing = true;
                setTasks(newTasks);
              }}
              className={`ml-2 flex-1 cursor-pointer ${task.done ? "line-through" : "no-underline"}`}
            >
              {task.text}
            </span>
          )}

          <Button
            danger
            onClick={() => {
              const newTasks = tasks.filter((_, index) => index !== i);  /* make new list without what we just clicked on */
              setTasks(newTasks);
            }}
            className="!shadow-none !font-bold !border-0 !p-0 !text-xl !ml-2"
          >
           <FiXOctagon />
          </Button>
        </div>
      ))}
    </div>
  );
}
export default TaskColumn;
