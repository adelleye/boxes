import React from "react";

function Box(props) {
  const styles = { backgroundColor: props.on ? "black" : "white" };
  return (
    //align-items: center;
    <div
      className="square"
      style={styles}
      onClick={() => props.handleClick(props.id)}
    ></div>
  );
}

export default Box;

// We have on and off we need to set background color on if square.on is true
