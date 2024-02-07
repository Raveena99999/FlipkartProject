import React from "react";
import Navbar from "./Navbar";
import Afternavbar from "./Afternavbar";
import Swipperslider2 from "./Swipperslider2";
import Gridcard from "./Gridcard";
import Footer from "./Footer";
import Flipkartdetails from "./Flipkartdetails";
import Defaultproduct from "./Defaultproduct";
import Electronics from "./Electronics";
import Beauty from "./Beauty";
export default function Flipkarthome() {
  return (
    <div>
      <Navbar />
      <Afternavbar />
      <Swipperslider2 />
      <Electronics />
      <Gridcard />
      <Defaultproduct />
      <Beauty />
      <Flipkartdetails />
      <Footer />
    </div>
  );
}
