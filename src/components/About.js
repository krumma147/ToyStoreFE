import React from 'react';
//import { Link } from 'react-router-dom'
import Header from './share/Header';
import Footer from './share/Footer';
const About = () => (
    //html & bootstrap
    <>
      <Header/>

      <div className="container mt-4 mb-4">
      <h2>About Us</h2>
      <p>
        Welcome to our website! We are passionate about bringing you the best toys for all ages.
        Our mission is to provide a delightful shopping experience, ensuring you find the perfect toys
        for yourself or your loved ones.
      </p>
      <p>
        At our store, you'll discover a wide range of toys, from classic favorites to the latest trends.
        Our team is dedicated to curating a diverse selection to cater to every interest and age group.
      </p>
      <p>
        Feel free to explore our website, discover fantastic toys, and don't hesitate to contact us if
        you have any questions or suggestions.
      </p>
      <p>Thank you for choosing us for all your toy needs!</p>
    </div>
      
      <Footer/>
    </>
    // Need update for this interface
  );
export default About;