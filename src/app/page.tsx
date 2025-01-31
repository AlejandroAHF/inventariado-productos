import React from "react";
import Welcome from "./components/Welcome";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Welcome></Welcome>
      <Footer></Footer>
    </>
  );
}
