import React from "react";
import ArrowFunctions from "./ArrowFunctions";
import "../notes/es6-arrow-functions-2";
import "../notes/es6-arrow-functions-3";

const Template = () => {
  const username = "takis";
  const userAge = 26;
  const userLocation = "New York";

  const secondUser = {
    name: "Liakos",
    age: 21,
    location: "Giannitsa",
  };

  return (
    <div style={{marginLeft: 20}}>
      <h1>{username}</h1>
      <p>Age: {userAge}</p>
      <p>Location: {userLocation}</p>

      <h1>{secondUser.name ? secondUser.name : "Not found"}</h1>
      <p>Age: {secondUser.age}</p>
      <p>Location: {secondUser.location}</p>

      <ArrowFunctions />
    </div>
  );
};

export default Template;
