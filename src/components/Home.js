import Hero from './Hero';
import About from './AboutUs';
import Menu from './Menu';
import Testimonial from './Testimonial';
import React from 'react';

const Home = () => {
    return(
        <div>
            <Hero />
    <About />
    <Menu />
    <Testimonial />
        </div>
    )
}

export default Home;