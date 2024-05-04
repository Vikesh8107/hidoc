/* eslint-disable */

import React from "react";
import Navbar from "../Components/Navbar";
import Info from "../Components/Info";
import BookAppointment from "../Components/BookAppointment";
import Reviews from "../Components/Reviews";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Reviews />
      <Info />
      <BookAppointment />
      <Footer />
    </div>
  );
}

export default Home;
