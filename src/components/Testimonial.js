import One from './img/img/testimonial-1.jpg';
import Two from './img/img/testimonial-3.jpg';
import Three from './img/img/testimonial-2.jpg';
import React from 'react';

const Testimonial = ()=>{
    return(
        <div>
        <div className="container-fluid py-5 overflow-x-hidden">
                <div className="container">
                    <div className="section-title">
                        <h4 className="text-primary text-uppercase" style={{letterSpacing: 5+"px"}}>Testimonial</h4>
                        <h1 className="display-4">Our Clients Say</h1>
                    </div>
                    <div className="owl-carousel testimonial-carousel">
                        <div className="testimonial-item p-3">
                            <div className="d-flex align-items-center mb-3">
                                <img className="img-fluid" src={One} alt="Lucie" />
                                <div className="ml-3">
                                    <h4>Lucie G.</h4>
                                </div>
                            </div>
                            <p className="m-0">Whenever I'm looking for a quick and easy coffee fix, HiveMind is my go-to!
                                The coffee itself is always fresh and delicious, with just the right amount of flavor.
                                Overall, HiveMind is my favorite coffee spot!</p>
                        </div>
                        <div className="testimonial-item p-3">
                            <div className="d-flex align-items-center mb-3">
                                <img className="img-fluid" src={Two} alt="Mars" />
                                <div className="ml-3">
                                    <h4>Mars B.</h4>
                                </div>
                            </div>
                            <p className="m-0">I had the pleasure of visiting HiveMind this week and I'm so impressed. The
                                cafe is convenient, easy to find and the prices are more than reasonable. But most
                                importantly, the food and their Hazelnut Latte was delicious! I couldn't believe how
                                flavorful everything was! Everyone that works there is friendly and accommodating,
                                making the entire experience even better. Highly recommend HiveMind for anyone looking
                                for a quick bite or a casual lunch spot!</p>
                        </div>
                        <div className="testimonial-item p-3">
                            <div className="d-flex align-items-center mb-3">
                                <img className="img-fluid" src={Three} alt="Jeremiah" />
                                <div className="ml-3">
                                    <h4>Jeremiah J.</h4>
                                </div>
                            </div>
                            <p className="m-0">I'm so happy that HiveMind opened up near me - it's been an absolute game
                                changer. I never have to worry about waiting for my food. Plus, the cafe itself is so
                                comfortable and inviting - it's become one of my favorite places to relax! Highly
                                recommend HiveMind if you're looking for an easy, convenient cafe experience. The coffee
                                is amazing, while its sweet, its not disgustingly sweet, and its customizable with a few
                                asks.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial;