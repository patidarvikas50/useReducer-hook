import React, { useReducer } from 'react'

const modes= [
    { emoji: '😊', label: 'Happy' },
    { emoji: '😢', label: 'Sad' },
    { emoji: '😠', label: 'Angry' },
    { emoji: '🤩', label: 'Excited' },
    { emoji: '😴', label: 'Sleepy' },
];

const initialState = 0;
const reducer =(state,action)=>{
    switch (action.type) {
        case "NEXT":
         return (state+1) % modes.length
        default: state;
           
    }
}

const MoodSwitcher = () => {
    const[state, dispatch]= useReducer(reducer,initialState)
    const currentMode = modes[state]
  return (
    <div>
        <h1>{currentMode.emoji}</h1>
        <h1>{currentMode.label}</h1>
        <button 
        onClick={()=>dispatch({type:"NEXT"})}
        >Next Mode</button>
    </div>
  )
}

export default MoodSwitcher
