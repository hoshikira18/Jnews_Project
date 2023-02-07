import React, { useState } from "react";
import Task from "./Task";


const Todolist = () => {

    const [tasks, setTasks] = useState([
        "test",
        "test1"
    ]);
    const [input, setInput] = useState('')

    function handleAdd (event) {
        event.preventDefault();
        setTasks([...tasks, input]);
        setInput('');
        console.log(tasks)
    }

     return (
        <form onSubmit={handleAdd} className="w-80 min-h-60 p-4 bg-slate-200 rounded">
            <div className="input-handle h-12 flex items-center justify-center">
                <input type="text" value={input} placeholder="Enter a task!" onChange={e => setInput(e.target.value)} className="p-2 rounded outline-none w-[75%]"/>
                <button type="submit" className="w-[20%] h-[80%] ml-2 bg-slate-500 rounded flex items-center justify-center">ADD</button>
            </div>
            <div className="tasks p-1">
                {tasks.map((task, index) => (
                    <Task key={index} task={task} />
                ))}
            </div>

        </form>
    )
}

export default Todolist