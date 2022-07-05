import React from "react";

const ArrowFunctions = () => {
  const getFirstName = (fullName) => fullName.split(" ")[0]; // first word

  return <div>{getFirstName("Elijah Koulaxis")}</div>;
};

export default ArrowFunctions;
