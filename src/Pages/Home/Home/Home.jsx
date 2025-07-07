import React from 'react';
import Banner from '../Banner/Banner';
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Banner></Banner>
        </div>
    );
};

export default Home;