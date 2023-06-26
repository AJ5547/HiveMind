import Here from "./img/img/about.png";

const About = () => {
    return (
        <>
    <div className="container-fluid py-5">
    <div className="container">
        <div className="section-title">
            <h4 className="text-primary text-uppercase" style={{letterSpacing: 5 + "px"}}>About Us</h4>
            <h1 className="display-4" id="about">Serving Since 2020</h1>
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
                <h1 className="mb-3">Our Vision</h1>
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
            <h4 className="text-primary text-uppercase" style={{letterSpacing: 5 +"px"}}>Our Services</h4>
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
                        <h4><i className="fa fa-coffee service-icon"></i>Fresh</h4>
                        <p style={{fontFamily: "Helvetica", fontSize: 20+ "px"}}>We get our coffee beans fresh every night, and in the morning when we
                            open we make ground down the coffee beans to be able to make your coffee. Our food is made daily for maximum freshness, and we get our ingredients the night before.
                        </p>
                    </div>
                </div>
            </div>
            {/* <div class="d-flex" style={{height: 200 +"px"}}>
  <div class="vr"></div>
</div> */}
            <div className="col-lg-6 mb-5">
                <div className="row align-items-center">
                    <div className="col-sm-5">
                    </div>
                    <div className="col-sm-7">
                        <h4><i className="fa fa-award service-icon"></i>Best Quality</h4>
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
</>
    )
}
export default About;