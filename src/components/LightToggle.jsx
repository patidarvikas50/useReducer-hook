import React, { useReducer } from "react";
import "../App.css";
import MoodSwitcher from "./MoodSwitcher";

const initialState = {
  isOn: false,
  count: 0,
};

const lightReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return {
        isOn: !state.isOn,
        count: state.count + 1,
      };

    default:
      state;
  }
};

const LightToggle = () => {
  const [state, dispatch] = useReducer(lightReducer, initialState);

  return (
    <div className="main">
      
      <div
        className="container"
        style={{ background: state.isOn ? "yellow" : "#ccc" }}
      >
          <MoodSwitcher/>
        <h3>Click Toggle Button And Switch Mode</h3>
        <h1>{state.isOn ? "Yellow" : "Grey"} Mode</h1>
        <button onClick={() => dispatch({ type: "TOGGLE" })}>Toggle</button>
        <p>Toggled{state.count} Times</p>
      </div>
    </div>
  );
};

export default LightToggle;
