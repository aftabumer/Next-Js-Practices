import React from "react";

const User = ({ user, age }) => {
  return (
    <div>
      <h1>user name: {user}</h1>
      <p>user age: {age}</p>
      <style jsx>{`
  div {
      border: 1px solid #eee;
      box-shadow: 0 2px 3px #ccc;
      padding: 20px;
      text-align: center:
  }`}</style>
    </div>
  );
};

export default User;
