import React, { useEffect, useContext } from "react";
import Cards from "./Cards";
import banner from "../Images/cycle_banner.jpg";
import CycleContext from "../../context/Cycle/CycleContext";
import UserContext from "../../context/User/UserContext";

export default function Home({ cycle }) {
  const { loadCycle } = useContext(CycleContext);

  useEffect(() => {
    loadCycle();
  }, []);
  return (
    <>
      <img className="banner-images" src={banner} alt="main_image" />
      <Cards />
    </>
  );
}
