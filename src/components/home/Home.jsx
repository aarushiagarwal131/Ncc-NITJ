import React from "react";
import { NCCCarousel, Aim, Pledge, NCCSong } from "./import";
import "./home.css";
const Home = () => {
  return (
    <div>
      <NCCCarousel />
      <Aim />
      <Pledge />
      <NCCSong />
    </div>
  );
};

export default Home;
