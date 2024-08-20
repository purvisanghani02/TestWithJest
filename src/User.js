import React from "react";

const User = ({ name, functionProp }) => {
  return (
    <>
      <h1>User first name:{name}</h1>
      <button onClick={functionProp}>function propes</button>
    </>
  );
};

export default User;
