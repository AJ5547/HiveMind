import SugarCookies from './img/Product/Food/project-290.webp';
import DoubleChocolateMuffins from './img/Product/Food/oriol-portell.webp';
import Macarons from './img/Product/Food/heather-barnes.webp';
import MatchaTea from './img/Product/Tea/ann.webp';
import BubbleTea from './img/Product/Tea/rodnae-productions.webp';
import ArnoldPalmer from './img/Product/Tea/arnold-palmer.webp';
import ColdBrew from './img/Product/Coffee/tabitha-turner.webp';
import HazelnutLatte from './img/Product/Coffee/hazelnut.webp';
import Cappuccino from './img/Product/Coffee/mocha.webp';
import React from 'react';




const Menu = () =>{
    return(
        <div>
         <div className="container-fluid pt-5 overflow-x-hidden">
                <div className="container">
                    <div className="section-title">
                        <h4 className="text-brown text-uppercase" style={{letterSpacing: 5 + "px"}}>Menu & Pricing</h4>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 className="mb-5"><a href="food.html" style={{textDecoration: "none", color: "#33211D"}}>Food</a>
                            </h1>
                            <div className="row align-items-center mb-5">
                                <div className="col-4 col-sm-3">
                                    <img className="w-100 rounded-circle mb-3 mb-sm-0"
                                        src={SugarCookies} alt="Sugar Cookies" />
                                   
                                </div>
                                <div className="col-8 col-sm-9">
                                    <h4>Sugar Cookies</h4>
                                     <h5 className="menu-price">$1.99</h5>
                                    <p className="m-0">Sweeten up your day with a delicious Frosted Sugar Cookie! Our cookie
                                        is jumbo-sized, baked to perfection and topped with a special frosting just for
                                        you. Enjoy the same classNameic taste of sugar cookies but with a delightful twist
                                        that changes with the season.</p>
                                </div>
                            </div>
                            <div className="row align-items-center mb-5">
                                <div className="col-4 col-sm-3">
                                    <img className="w-100 rounded-circle mb-3 mb-sm-0"
                                        src={DoubleChocolateMuffins} alt="Double Chosolate Muffins" />
                                    
                                </div>
                                <div className="col-8 col-sm-9">
                                    <h4>Double Chocolate Muffins</h4>
                                    <h5 className="menu-price">$1.99</h5>
                                    <p className="m-0"> A perfect snack or dessert at
                                        any time of day, these soft and moist muffins are sure to satisfy your sweet
                                        tooth. Get the taste of homemade without the hassle, and indulge in our Double
                                        Chocolate Muffins today!</p>
                                </div>
                            </div>
                            <div className="row align-items-center mb-5">
                                <div className="col-4 col-sm-3">
                                    <img className="w-100 rounded-circle mb-3 mb-sm-0"
                                        src={Macarons} alt="Macarons" />
                                   
                                </div>
                                <div className="col-8 col-sm-9">
                                    <h4>Macarons</h4>
                                     <h5 className="menu-price">$3</h5>
                                    <p className="m-0"> Get ready to tantalize your taste buds with Macarons! Our unique,
                                        coconut-flavored macarons come in your choice of colors, creating a perfect
                                        indulgence for any occasion. For those who love a delicious treat, our macarons
                                        are sure to satisfy. Add a splash of color and flavor to your day with Macarons!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h1 className="mb-5"><a href="tea.html" style={{textDecoration: "none", color: "#33211D"}}>Tea </a>
                            </h1>
                            <div className="row align-items-center mb-5">
                                <div className="col-4 col-sm-3">
                                    <img className="w-100 rounded-circle mb-3 mb-sm-0" src={MatchaTea}
                                        alt="Matcha Tea" />
                                    
                                </div>
                                <div className="col-8 col-sm-9">
                                    <h4>Matcha Tea</h4>
                                    <h5 className="menu-price">$5.99</h5>
                                    <p className="m-0">Get the best of Matcha Tea with a taste you can't resist! Enjoy our
                                        delicious and soothing Matcha Tea Latte to help you relax and unwind. Whether
                                        you enjoy it hot or cold, our Matcha Tea will keep you refreshed.</p>
                                </div>
                            </div>
                            <div className="row align-items-center mb-5">
                                <div className="col-4 col-sm-3">
                                    <img className="w-100 rounded-circle mb-3 mb-sm-0"
                                        src={BubbleTea}alt="Bubble Tea" />
                                </div>
                                <div className="col-8 col-sm-9">
                                    <h4>Bubble Tea</h4>
                                    <h5 className="menu-price">$5.80</h5>
                                    <p className="m-0">Craving something sweet, chewy, and delicious? Bubble Tea is here to
                                        satisfy your cravings! Our unique blend of creamy milk tea combined with brown
                                        sugar and tapioca pearls gives you the perfect mix of texture and flavor. </p>
                                </div>
                            </div>
                            <div className="row align-items-center mb-5">
                                <div className="col-4 col-sm-3">
                                    <img className="w-100 rounded-circle mb-3 mb-sm-0"
                                        src={ArnoldPalmer} alt="Arnold Palmer" />
                                </div>
                                <div className="col-8 col-sm-9">
                                    <h4>Arnold Palmer</h4>
                                    <h5 className="menu-price">$2.95</h5>
                                    <p className="m-0">Get ready for a truly unique and delicious summer drink experience
                                        with Arnold Palmer! Our creamy, layered combo of iced tea and lemonade will
                                        quench your thirst and keep you coming back for more. Perfect for picnics in the
                                        park, or just relaxing.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h1 className="mb-5"><a href="coffee.html" style={{textDecoration: "none", color: "#33211D"}}>
                                    Coffee</a></h1>
                            <div className="row align-items-center mb-5">
                                <div className="col-4 col-sm-3">
                                    <img className="w-100 rounded-circle mb-3 mb-sm-0"
                                        src={ColdBrew} alt="Cold Brew" />
                                </div>
                                <div className="col-8 col-sm-9">
                                    <h4>Cold Brew</h4>
                                    <h5 className="menu-price">$4.40</h5>
                                    <p className="m-0">Get ready to experience the ultimate cold brew flavor! Our Cold Brew
                                        is packed with delicious, creamy vanilla and coffee that will make your taste
                                        buds sing. Our unique blend of premium Arabica beans and rich creamer is sure to
                                        give you the perfect start to your day.</p>
                                </div>
                            </div>
                            <div className="row align-items-center mb-5">
                                <div className="col-4 col-sm-3">
                                    <img className="w-100 rounded-circle mb-3 mb-sm-0"
                                        src={HazelnutLatte} alt="Hazelnut Latte" />
                                </div>
                                <div className="col-8 col-sm-9">
                                    <h4>Hazelnut Latte</h4>
                                    <h5 className="menu-price">$4.99</h5>
                                    <p className="m-0">Ready for a delicious treat? Discover the taste of our Hazelnut
                                        Latte! A perfect combination of sweet hazelnut and rich coffee flavor, this
                                        latte is sure to make you smile. Enjoy the creamy, smooth texture and the subtle
                                        nuttiness that comes with every sip. </p>
                                </div>
                            </div>
                            <div className="row align-items-center mb-5">
                                <div className="col-4 col-sm-3">
                                    <img className="w-100 rounded-circle mb-3 mb-sm-0" src={Cappuccino}
                                        alt="Cappuccino" />
                                </div>
                                <div className="col-8 col-sm-9">
                                    <h4>Cappuccino</h4>
                                    <h5 className="menu-price">$3.99</h5>
                                    <p className="m-0">With steamed milk, espresso, and foam, your morning coffee will be
                                        nothing short of perfect.  Every sip is an unforgettable experience that will leave you wanting more and more and is sure to brighten your day. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;