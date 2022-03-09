// Code EyesOnMe Component Here
import React from 'react'


export default function EyesOnMe() {

    const handleFocus = function (){
        console.log("Good!")
    }
    const handleBlur = function (){
        console.log("Hey! Eyes on me!")
    }
  return (
    <button onFocus={handleFocus} onBlur={handleBlur} >Eyes on me</button>
  )
}

