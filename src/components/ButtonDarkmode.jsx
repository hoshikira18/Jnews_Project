
import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa';
import darkmodeToggle from '../javascripts/darkmode';
import holdDarkmode from '../javascripts/darkmode';
import { useEffect } from 'react';

export default function Buttondarkmode() {
    useEffect(() => {
        window.onload = holdDarkmode();
    }, []);

    
    return (

        <button className=" flex" onClick={darkmodeToggle} >
            <div className='sun'>
                <FaSun />
            </div>
            <div className='moon hidden text-white'>
                <FaMoon />
            </div>
        </button>
    )
}


