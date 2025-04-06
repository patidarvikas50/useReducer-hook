import React, { useReducer } from 'react'

const initialState ={fontSize:16}

const reducer=(state,action)=>{
    switch (action.type) {
       case "increment":
    return {fontSize: state.fontSize +2};
       case "decrement":
    return {fontSize: state.fontSize -2};
    case "reset":
    return {fontSize: 16};

        default: state
            
    }
}
const FontSizeAdjuster = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        <p style={{fontSize:`${state.fontSize}px`}}>Hello, I am Vikas Patidar</p>
      <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
      <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
      <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
    </div>
  )
}

export default FontSizeAdjuster
