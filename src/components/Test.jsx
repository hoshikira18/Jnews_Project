import React from "react";

function Bread(){
    return(
        <div className='h-10 sticky top-0 px-5 items-center text-gray-500 dark:border rounded-b-xl bg-white dark:bg-gray-900 dark:border-black grid grid-cols-12 '>
            <button className='col-span-2  '>
                <div className=' dark:hover:text-white text-3xl w-full font-semibold text-start pl-8 hover:scale-110 transition duration-500 text-gray-500 hover:text-black'>{'<'}</div>
            </button>
            <div className='col-span-8 text-center dark:text-white font-semibold text-balck text-3xl'>Home</div>
            <button className='col-span-2 '>
                <div className=' dark:hover:text-white text-3xl text-end font-semibold w-full pr-8 hover:scale-110 transition duration-500 text-gray-500 hover:text-black'>{'>'}</div>
            </button>            
        </div>

    )

}
export default Bread ;