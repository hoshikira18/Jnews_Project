import React from "react";

function Bread(){
    return(
        <div className='h-12 sticky top-0 px-5 items-center text-gray-500 dark:border rounded-b-xl dark:bg-gray-50 bg-gray-900 dark:border-black grid grid-cols-12 '>
            <button className='col-span-2'>
                <div className=' text-white text-2xl'>{'<'}</div>
            </button>
            <div className='col-span-8 text-center text-white font-semibold text-2xl'>Home</div>
            <div className='col-span-2 text-end text-white text-2xl'>{'>'}</div>            
        </div>

    )

}
export default Bread ;