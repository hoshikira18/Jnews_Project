import React from "react";
import { GrAdd } from 'react-icons/gr';
import {HiOutlineTrash} from 'react-icons/hi'


const Todolist = () => {
     return (
        <div className="bg-gradient-to-b from-green-400 to-blue-500 max-w-[800px] mt-[96px] w-full h-screen flex flex-col ">
              <div className="bg-white rounded-md justify-center m-10 p-10 ">
                <h1 className="font-bold text-black text-3xl p-5">Todo App</h1>
                <div className="flex flex-row items-center justify-center w-full">
                    <input className="p-2 border-solid border-black flex rounded-md text-black" type="text" placeholder="Add your new to do" />
                    <button className="p-2 ml-2 rounded-md bg-[#c559c5]">
                         <GrAdd size={20} /></button>
                </div>
                <div className="w-full bg-gray-200 items-center justify-center text-gray-800 m-3 h-10">
                    <p className="px-2 pt-2">Buy a new gaming laptop</p>
                </div>
                <div className="flex flex-row w-full bg-gray-200 items-center justify-between text-gray-800 m-3 h-10">
                    <p className="px-2 pt-2 ">Complete a previous task</p>
                    <button className="bg-[#ff230c]">
                        <HiOutlineTrash size={40}/>
                    </button>
                    
                </div>
                <div className="w-full bg-gray-200 items-center justify-center text-gray-800 m-3 h-10">
                    <p className="px-2 pt-2 ">Create a video for Youtube</p>
                </div>
                <div className="w-full bg-gray-200 items-center justify-center text-gray-800 m-3 h-10">
                    <p className="px-2 pt-2 font-normal">Create a new portfolio site</p>
                </div>
                <div className="flex flex-row font-normal items-center justify-between">
                    <p>You have 4 pending tasks</p>
                    <button className="bg-[#c559c5] text-white rounded-sm font-normal ml-7 h-8 w-24">Clear All</button>
                </div>
                
                
                

            </div>
          
            
        </div>
    )
}

export default Todolist