
import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa';
import darkmodeToggle from '../javascripts/darkmode';
export default function Buttondarkmode() {


    return (

        <button className=" flex" onClick={ darkmodeToggle }>
            <div className='sun'>
                <FaSun />
            </div>
            <div className='moon hidden text-white'>
                <FaMoon />
            </div>
            


        </button>
    )
}
