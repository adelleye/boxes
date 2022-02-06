import React from "react";
import boxes from "./boxes";
import Box from "./Box";
import "./style.css";

export default function App() {
  const [boxesArray, setBoxesArray] = React.useState(boxes);
  console.log(boxes[0].id);

  function toggle(id) {
    console.log("toggle button clicked");
    console.log(id);
    /*
    loop through boxes array?
    if id is equal to boxesArray.id then change the square.on to opposite?
    */
    setBoxesArray((prevBox) => {
      const newBoxesArray = [];

      for (let i = 0; i < prevBox.length; i++) {
        const currentBox = prevBox[i];
        if (id === currentBox.id) {
          const updatedBox = {
            ...currentBox,
            on: !currentBox.on,
          };
          newBoxesArray.push(updatedBox);
        } else {
          console.log("hello world");
          newBoxesArray.push(currentBox);
        }
      }
      return newBoxesArray;
    });
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
