import React from "react";
import Header from "../Components/Header";
import Card from "../Components/Card";
import Button from "../Components/Button";
import database from "../firebase";

function Home() {
  const handleLogout = () => {
    database
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
      })
      .catch(function (error) {
        // An error happened.
      });
  };
  return (
    <>
      <Header />
      <Card />
      <Button />
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
}

export default Home;
