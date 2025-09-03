import { useState, useEffect } from "react";
import { Checkbox, Input, Button } from "antd";
import { IoAddCircleOutline } from "react-icons/io5";
import { FiXOctagon } from "react-icons/fi";

function TaskColumn({ title, userId  }) {

  const storageKey = `tasks_${userId}_${title}`;
  const [tasks, setTasks] = useState(() => {      // tasks is to save tasks, setTasks is to change tasks data
    const savedTasks = localStorage.getItem(storageKey);
    return savedTasks ? JSON.parse(savedTasks) : [];    // parse -> from string to array. It means law fe data turn it to array w gebha fe tasks.
  });

  useEffect(() => {    // to change tasks in localStorage each time we change it
    localStorage.setItem(storageKey, JSON.stringify(tasks));   // stringify -> from array to string
  }, [tasks, storageKey]);

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
              onBlur={(e) => {    /* when leaving the input field (adoos 3ala mkan tany fe el screen) */
                const newTasks = [...tasks];       /* copy current list */
                newTasks[i].text = e.target.value;   /* save the input data we wrote */
                newTasks[i].editing = false;
                setTasks(newTasks);      /* update state */
              }}
              onPressEnter={(e) => {  /* when clicking enter */
                const newTasks = [...tasks];
                newTasks[i].text = e.target.value;
                newTasks[i].editing = false;
                setTasks(newTasks);
              }}
              className="!border-none !shadow-none !focus:border-none"
            />
          ) : ( 
            <span
              onClick={() => {     /* when clicking on the input data to edit it */
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


/*
========== how it worksss??? ==========
1. we have useState tasks that contain the list of tasks AND settasks function to call it when changing state,
each time we call settasks it rerenders the full code, 
and at first the tasks [] is empty SOOO? map won't work.

2. if we clicked on add new task a new object is made for the new task and added to the list,
SOOO? map now will work on it to give it input, checkbox and delete button.

3. if new task is added b2a ?
a new obj is made for it and added to the list
and rerender happens to save current + add new .

4. if clicked on check button we call settasks to rerender the full list with the new changes.
same for remove button ... same for editing the input data tmam ? tmam.
*/
