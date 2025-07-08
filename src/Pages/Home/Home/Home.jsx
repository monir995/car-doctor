import React from 'react';
import Banner from '../Banner/Banner';
import { Carousel } from 'react-responsive-carousel';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
        </div>
    );
};

export default Home;