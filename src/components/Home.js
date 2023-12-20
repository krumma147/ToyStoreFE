import React from 'react';
//import { Link } from 'react-router-dom'
import Header from './share/Header';
import Hero from './share/Hero';
import Footer from './share/Footer';
import Info from './share/Info';
import TopProduct from './share/TopProduct';

const Home = () => (

    <div>
        <Header />
        
        <Hero />
        
        <TopProduct />
        {/* <div>
            <h2>Home Body</h2>
        </div> */}

        <Info />

        <Footer />
    </div>
    //html & bootstrap
  );
export default Home;