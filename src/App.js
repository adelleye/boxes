import React from "react";
import boxes from "./boxes";
import Box from "./Box";
import "./style.css";

export default function App() {
  const [boxesArray, setBoxesArray] = React.useState(boxes);

  function toggle(id) {
    console.log("toggle button clicked");
  }

  const squares = boxesArray.map((square) => (
    <Box key={square.id} id={square.id} on={square.on} handleClick={toggle} />
  ));

  return (
    <main>{squares}</main>
    //hhghgh
  );
}

//create a state for the boxes array
//Then we need to map over the boxes array and display them in the page
// then  set the background of each box based on if "on" is true : false
