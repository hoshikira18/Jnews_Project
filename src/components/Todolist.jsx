import React, { useState } from "react";
// import Task from "./Task";
import { BsTrash } from "react-icons/bs";


const Todolist = () => {

    const [tasks, setTasks] = useState([

    ]);
    const [input, setInput] = useState()

    function handleAdd (event) {
        // const newTask = {id: }
        event.preventDefault();
        setTasks([...tasks, input]);
        setInput('');
        // console.log(tasks)
    }

    function handleDeteleTask(id) {
        console.log(id)
    //  setTasks(tasks.filter((task, index) => {return index !== id}))
        // console.log(tasks)
    }

     return (
        <form onSubmit={handleAdd} className="w-80 min-h-60 p-4 bg-slate-200 rounded">
            <div className="input-handle h-12 flex items-center justify-center">
                <input type="text" value={input} placeholder="Enter a task!" onChange={e => setInput(e.target.value)} className="p-2 rounded outline-none w-[75%]"/>
                <button type="submit" className="w-[20%] h-[80%] ml-2 bg-slate-500 rounded flex items-center justify-center">ADD</button>
            </div>
            <div className="tasks p-1">
                {tasks.map((task, index) => (
                    <div className='task h-10 px-2 my-2 bg-slate-500 rounded flex justify-between items-center cursor-pointer'>
                        <p>{ task }</p>
                        <BsTrash className='' onClick={()=> {setTasks(tasks.filter((task, id) => {return id !== index}))}}/>
                    </div>  
                ))}
            </div>
        </form>
    )
}

export default Todolist