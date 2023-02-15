import React from 'react'
import { BsTrash } from 'react-icons/bs'

function Task({ task }) {
  return (
    <div className='task h-10 px-2 my-2 bg-slate-500 rounded flex justify-between items-center cursor-pointer'>
        <p>{ task }</p>
        <BsTrash className=''/>
    </div>
  )
}

export default Task