import React from "react";
import Router from "next/router";

const ErrorPage = () => {
  return (
    <div>
      <h1>Oops! something wrone</h1>
      <button onClick={() => Router.push("/")}>goback to homepage</button>
    </div>
  );
};

export default ErrorPage;
