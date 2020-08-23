import React from "react";
import { resolve } from "path";
import { rejects } from "assert";

const Auth = ({ appName }) => {
  return (
    <div>
      <h1>its {appName}</h1>
    </div>
  );
};

Auth.getInitialProps = (context) => {
  const promise = new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve({ appName: "Auth Page" });
    }, 1000);
  });
  return promise;
};

export default Auth;
