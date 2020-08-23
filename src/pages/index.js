import React from "react";
import Link from "next/link";
import Router from "next/router";
import User from "../components/USer";
import Homepage from "../containers/Homepage";
import List from "./List";

const pages = () => {
  return (
    <div>
      <h1>its Main page</h1>
      <User user="Aftab" age={25} />
      <p>
        Go to
        <Link href="/auth"> Auth </Link>
        with link tag
      </p>
      <p>
        <Link href="/list">
          <a>List</a>
        </Link>
      </p>
      <Homepage />
      <List />
      <button onClick={() => Router.push("/auth")}>
        goto auth with button
      </button>
    </div>
  );
};

export default pages;

// export default Homepage;
