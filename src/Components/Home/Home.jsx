/* eslint-disable no-unused-vars */
import React from "react";
import Banner from "./Banner";
import Cards from "./Cards";
import { useLoaderData } from "react-router-dom";
const Home = () => {
    const cards=useLoaderData();
  return (
    <div>
      <Banner />
      <Cards cards={cards} />
    </div>
  );
};

export default Home;
