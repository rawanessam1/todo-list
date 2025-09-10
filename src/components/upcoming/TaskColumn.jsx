import { useState, useEffect } from "react";
import { Checkbox, Input, Button, DatePicker } from "antd";
import { IoAddCircleOutline } from "react-icons/io5";
import { FiXOctagon } from "react-icons/fi";
import dayjs from "dayjs";

function TaskColumn({ title, userId }) {
  const storageKey = `tasks_${userId}_${title}`;

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem(storageKey);
    if (savedTasks) {
      return JSON.parse(savedTasks).map(task => ({
        ...task,
        date: task.date ? dayjs(task.date) : null
      }));
    }
    return [];
  });

  useEffect(() => {
    const tasksToStore = tasks.map(task => ({
      ...task,
      date: task.date ? task.date.toISOString() : null
    }));
    localStorage.setItem(storageKey, JSON.stringify(tasksToStore));

    // Notify Calendar page
    window.dispatchEvent(new CustomEvent("tasksUpdated", {
      detail: { key: storageKey }
    }));
  }, [tasks, storageKey]);

  return (
    <div className="flex-1 m-2.5 p-4 lg:p-8 border border-black/60 rounded-4xl">
      <h3 className="font-oswald text-3xl">{title}</h3>
      <Button
        type="primary"
        onClick={() => setTasks([...tasks, { text: "", done: false, editing: true, date: dayjs().hour(9).minute(0) }])}
        className="!bg-white !text-black !w-full !flex !border !border-black/40 !rounded-xl !justify-start"
      >
        <IoAddCircleOutline className="text-xl"/> Add new task
      </Button>

      {tasks.map((task, i) => (
        <div key={i} className="flex items-center gap-2 mb-2 border-b border-black/40 p-2">
          <div className="green-checkbox">
          <Checkbox
            checked={task.done}
            onChange={() => {
              const newTasks = [...tasks];
              newTasks[i].done = !newTasks[i].done;
              setTasks(newTasks);
            }}
            className="!mr-2"
          />
          </div>

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
              className="!border-none !shadow-none !focus:border-none flex-1"
            />
          ) : (
            <span
              onClick={() => {
                const newTasks = [...tasks];
                newTasks[i].editing = true;
                setTasks(newTasks);
              }}
              className={`ml-2 flex-1 cursor-pointer ${task.done ? "line-through" : ""}`}
            >
              {task.text || "(no title)"}
            </span>
          )}

            <DatePicker
            value={task.date}
            onChange={(date) => {
              const newTasks = [...tasks];
              newTasks[i].date = date;
              setTasks(newTasks);
            }}
            className="mt-2 sm:mt-0 max-w-28 lg:max-w-40"
            showTime={{ format: 'HH:mm' }}
            format="YYYY-MM-DD HH:mm"
            />
            <Button
            danger
            onClick={() => setTasks(tasks.filter((_, index) => index !== i))}
            className="!shadow-none !font-bold !border-0 !p-0 !text-xl sm:ml-2 mt-2 sm:mt-0"
            >
              <FiXOctagon />
            </Button>

        </div>
      ))}
    </div>
  );
}

export default TaskColumn;
