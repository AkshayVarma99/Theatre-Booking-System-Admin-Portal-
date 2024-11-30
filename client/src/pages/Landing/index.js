
import React from 'react';
import Navb from '../../components/Navb';
import Header from '../../components/Header';
import Gallery from '../../components/Gallery';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import About from '../../components/About';

function Landing() {
  return (
    <>
      <Navb />
      <Header />
      <section id="shows">
        <Gallery/>
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="contact">
        <Contact/>
      </section>
      <Footer/>
    </>
  );
}

export default Landing;
