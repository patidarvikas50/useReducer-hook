import React, { useReducer } from "react";

const initialState = { color: "#ccc" };
const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
const reducer = (state, action) => {
  switch (action.type) {
    case "color_change":
      return { color: getRandomColor() };
    default:
        return  state;
  }
};


const BackgroundColorChanger = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (

    <div 
    style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
    <div
      style={{
        margin:"400px",
        height: "80vmin",
        width: "80vmin",
        backgroundColor: state.color,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "12px",
        transition: "background-color 0.3s ease"

      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Click to change background color</h2>
      <button onClick={() => dispatch({ type: "color_change" })}>
        Change Colour
      </button>
    </div>
    </div>
  );
};

export default BackgroundColorChanger;
