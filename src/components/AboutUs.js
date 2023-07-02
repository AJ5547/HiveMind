import Here from "./img/img/about.png";
import React from 'react';

const About = () => {
    return (
        <div>
    <div className="container-fluid py-5">
    <div className="container">
        <div className="section-title">
            <h1 className="text-brown text-uppercase" style={{letterSpacing: 5 + "px"}}>About Us</h1>
            <h2 className="display-4" id="about">Serving Since 2020</h2>
        </div>
        <div className="row">
            <div className="col-lg-4 py-0 py-lg-5">
                <h1 className="mb-3">Our Story</h1>
                <h5 className="mb-3">In 2018 we wanted to open up a cafe...</h5>
                <p style={{ fontFamily: "Helvetica", fontSize: 20 + "px"}}>We didn't have the resources back then, so as we saved up for a building we worked
                    tirelessly to get our products perfected. Sometimes we felt live giving up, and then we
                    came across another thing to tell us not to. At the end of 2019 we finally opened up,
                    until the pandemic hit, business was great. The pandemic nearly wiped out our entire
                    business. </p>
            </div>
            <div className="col-lg-4 py-5 py-lg-0" style={{minHeight: 500 + "px"}}>
                <div className="position-relative h-100">
                    <img className="position-absolute w-100 h-100" src={Here}
                        style={{objectFit: "cover"}} alt="Inbetween the Two Blocks of text" />
                </div>
            </div>
            <div className="col-lg-4 py-0 py-lg-5">
                <h1 className="mb-3 text-brown">Our Vision</h1>
                <p style={{fontFamily: "Helvetica", fontSize: 20 + "px"}}>We want to create a relaxing, accepting cafe with a wide variety of products. We locally
                    source a lot of our products, and if we cant we make sure they can be got from
                    sustainable
                    businesses.</p>
                <h5 className="mb-3"><i className="fa fa-check text-primary mr-3"></i>Sustainability
                </h5>
                <h5 className="mb-3"><i className="fa fa-check text-primary mr-3"></i>Wide Variety
                </h5>
                <h5 className="mb-3"><i className="fa fa-check text-primary mr-3"></i>Locally Souced
                </h5>
            </div>
        </div>
    </div>
</div>
<div className="container-fluid pt-5">
    <div className="container">
        <div className="section-title">
            <h4 className="text-brown text-uppercase" style={{letterSpacing: 5 +"px"}}>Our Services</h4>
            <h1 className="display-4">Fresh Beans, and Food</h1>
        </div>
        <div className="row">
            <div className="col-lg-6 mb-5">
                <div className="row align-items-center">
                    <div className="col-sm-5">
                    </div>
                </div>
            </div>
            <div className="col-lg-6 mb-5">
                <div className="row align-items-center">
            
                    <div className="col-sm-7">
                        <h4><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256" className="p-1 service-icon"><path d="M208,80H32a8,8,0,0,0-8,8v48a96.3,96.3,0,0,0,32.54,72H32a8,8,0,0,0,0,16H208a8,8,0,0,0,0-16H183.46a96.59,96.59,0,0,0,27-40.09A40,40,0,0,0,248,128v-8A40,40,0,0,0,208,80Zm24,48a24,24,0,0,1-17.2,23,95.78,95.78,0,0,0,1.2-15V97.38A24,24,0,0,1,232,120ZM112,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm32,0V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0ZM80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Z"></path></svg>Fresh</h4>
                        <p style={{fontFamily: "Helvetica", fontSize: 20+ "px"}}>We get our coffee beans fresh every night, and in the morning when we
                            open we make ground down the coffee beans to be able to make your coffee. Our food is made daily for maximum freshness, and we get our ingredients the night before.
                        </p>
                    </div>
                </div>
            </div>
            <div class="d-flex" style={{height: 200 +"px"}}>
  <div class="vr"></div>
</div>
            <div className="col-lg-6 mb-5">
                <div className="row align-items-center">
                    <div className="col-sm-5">
                    </div>
                    <div className="col-sm-7">
                        <h4><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 384 512" className="service-icon"><path d="M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z"/></svg>Best Quality</h4>
                        <p style={{fontFamily: "Helvetica",  fontSize: 20 + "px;"}}>We focus on the quality of what we put out. We make sure the recipe
                            doesnt get altered in anyway, and our workers and bakers have all the training 
                            they need to make you quality products.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr />
</div>
</div>
    )
}
export default About;