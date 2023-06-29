
import React from 'react';
import Header from './Header';

const Contact = () =>{
    return(
        <div>
        <div className="container-fluid pt-5">
        <div className="container">
            <div className="section-title">
                <h4 className="text-primary text-uppercase" style={{letterSpacing: 5 +"px"}}>Contact Us</h4>
                <h1 className="display-4">Feel Free To Contact</h1>
            </div>
            <div className="row px-3 pb-2">
                <div className="col-sm-4 text-center mb-3">
                    <i className="fa fa-2x fa-map-marker-alt mb-3 text-primary"></i>
                    <h4 className="font-weight-bold">Address</h4>
                    <p>123 Street, Springville, UT USA</p>
                    <p className="f-5"> *FAKE* </p>
                </div>
                <div className="col-sm-4 text-center mb-3">
                    <i className="fa fa-2x fa-phone-alt mb-3 text-primary"></i>
                    <h4 className="font-weight-bold">Phone</h4>
                    <p>+1 385-224-9867</p>
                </div>
                <div className="col-sm-4 text-center mb-3">
                    <i className="far fa-2x fa-envelope mb-3 text-primary"></i>
                    <h4 className="font-weight-bold">Email</h4>
                    <p>arjack0815@gmail.com</p>
                </div>
            </div>
            <div className="row">

                <div className="col-md-6 pb-5">
                    <div className="contact-form">
                        <div id="success"></div>
                        <form name="sentMessage" id="contactForm" novalidate="novalidate">
                            <div className="control-group">
                                <input type="text" className="form-control bg-transparent p-4" id="name" placeholder="Your Name"
                                    required="required" data-validation-required-message="Please enter your name" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="email" className="form-control bg-transparent p-4" id="email" placeholder="Your Email"
                                    required="required" data-validation-required-message="Please enter your email" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input type="text" className="form-control bg-transparent p-4" id="subject" placeholder="Subject"
                                    required="required" data-validation-required-message="Please enter a subject" />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <textarea className="form-control bg-transparent py-3 px-4" rows="5" id="message" placeholder="Message"
                                    required="required"
                                    data-validation-required-message="Please enter your message"></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div>
                                <button className="btn btn-primary font-weight-bold py-3 px-5" type="submit" id="sendMessageButton">Send
                                    Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default Contact;