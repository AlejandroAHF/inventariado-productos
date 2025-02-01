import React from "react";
import Welcome from "./components/Welcome";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";
import TestimonialCard from "./components/TestimonialCard";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Welcome></Welcome>
      <TestimonialCard></TestimonialCard>
      <Footer></Footer>
    </>
  );
}
