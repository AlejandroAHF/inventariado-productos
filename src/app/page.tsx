import React from 'react';
import Welcome from './components/Welcome';
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar';

export default function Home() {
  return (
    <>
    <Navbar></Navbar>
     <Welcome></Welcome>
     <Footer></Footer>
    </>
  );
}
