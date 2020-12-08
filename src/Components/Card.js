import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "../Css/Card.css";
// import database from "./firebase"

function Card() {
  // const [people, setPeople] = React.useState([]);

  const people = [
    {
      name: "steve",
      url:
        "https://addicted2success.com/wp-content/uploads/2017/11/10-Things-We-Can-Learn-From-the-Incredible-Steve-Jobs.jpg",
    },
    {
      name: "elon Musk",
      url:
        "https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk-1100x733.jpg",
    },
  ];

  // React.useEffect(() => {
  //   const unsubscribe = database
  //     .collection("people")
  //     .onSnapshot((snapshot) =>
  //       setPeople(snapshot.docs.map((doc) => doc.data))
  //     );

  //   return () => {
  //     unsubscribe();
  //   };

  //   // const fetchData = async () => {
  //   //   const db = firebase.firestore()
  //   //   const data = await db.collection("people").get()
  //   //   console.log(data)
  //   //   setPeople(data.docs.map((doc) => doc.data()))
  //   // }
  //   // fetchData()

  // }, []);

  // console.log(people);

  return (
    <div>
      <div className="card_container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={people.name}
            preventSwipe={["up", "down"]}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Card;
