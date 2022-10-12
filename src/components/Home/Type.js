import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Burgers",
          "Catfish",
          "Chicken",
          "Ice Cream",
          "Hot Dogs",
          "Pizza",
          "Sandwiches",
          "Shrimp",
          "Steak",
          "Tacos",
          "Wings",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
