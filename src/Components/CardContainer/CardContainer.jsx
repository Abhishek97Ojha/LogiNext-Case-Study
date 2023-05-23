import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import Card from "../Card/Card";
import "./cardContainer.css";

const CardContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const context = useContext(MyContext);
  useEffect(() => {
    async function apiData() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        context.setUserData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    // apiData();
    setTimeout(() => {
      apiData();
    }, 500);
  }, []);
  function getId(id) {
    console.log(id);
  }
  function delItem(id) {
    let data = context.userData.filter((e) => e.id !== id);
    context.setUserData(data);
  }
  return (
    <div className={isLoading ? "cube-container" : "card-container"}>
      {isLoading ? (
        <div className="sk-folding-cube">
          <div className="sk-cube1 sk-cube"></div>
          <div className="sk-cube2 sk-cube"></div>
          <div className="sk-cube4 sk-cube"></div>
          <div className="sk-cube3 sk-cube"></div>
        </div>
      ) : (
        context.userData &&
        context.userData.map((ele) => {
          return (
            <Card
              key={ele.id}
              username={ele.username}
              name={ele.name}
              email={ele.email}
              phone={ele.phone}
              website={ele.website}
              id={ele.id}
              getId={getId}
              delItem={delItem}
              address = {ele.address}
              company = {ele.company}
            />
          );
        })
      )}
    </div>
  );
};

export default CardContainer;
