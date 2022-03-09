// Code Keypad Component Here
import React from 'react'

export default function Keypad(){

    const handleChange = function(){
        console.log("Entering password...")
    }

    return <>
    <input type="password" onChange={handleChange} />
    </>
}