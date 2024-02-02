import React from "react";
import { HomeHero } from "./components/HomeHero";
import { Advertise } from "./components/Advertise";
import { Welcome } from "./components/Welcome";
import { Service } from "./components/HomeSrvice";
import { Specialists } from "./components/Specialists";
import { Booking } from "./components/Booking";
import { HomeNews } from "./components/HomeNews";
import { HomeContact } from "./components/HomeContact";

export const Home = () => {
  return (
    <>
      <HomeHero />
      <Advertise />
      <Welcome />
      <Service />
      <Specialists />
      <Booking />
      <HomeNews />
      <HomeContact />
    </>
  );
};
