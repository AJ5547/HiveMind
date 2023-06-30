import React from 'react';

const Coffee = () =>{
    return(
        <div id="content">
      <section class="sidebar">
        <div id="menubar">
          
          <nav class="menu">
            <h2>Coffee</h2>
            <hr />
            <ul>
              <li><a href="#1" title="Link"> Black Coffee</a></li>
              <li><a href="#2" title="Link">Vanilla Latte</a></li>
              <li><a href="#3" title="Link">Cold Brew</a></li>
              <li class="notimp"><a
                  href="#4"
                  title="Link"
                >
                  Hazelnut Latte</a
                >
              </li>

              <li class="notimp">
                <a href="#5" title="Link"> Caramel Mocha</a>
              </li>
              <li class="notimp">
                <a href="#6" title="Link"> Iced Coffee</a>
              </li>
              <li class="notimp"><a href="#7" title="Link"> Espresso Mocha</a></li>
              <li class="notimp">
                <a href="#8" title="Link"> Cappuccino</a>
              </li>
              <li class="notimp"><a href="#9" title="Link"> Cocoa Bean Frappe</a></li>
              <li class="notimp">
                <a href="#ten" title="Link"> Mochaccino</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
      <section class="mainContent">
        <div class="productRow"> 
          <article class="productInfo">
            <div id="1"> 
              <img src="img/Product/Coffee/black-coffee.webp" alt="Coffee" />
            </div>
            <br />
            <p class="price"> $1.95 </p>
            <p  class="productContent"> Black Coffee</p>
            <p style={{marginTop:-45 + "px"}}> Our Black Coffee is a delicious, reliable, non-sweetened premium blend of coffee beans.</p>
            <br />
            
          </article>
          <article class="productInfo">
            <div id="2"> 
              <img src="img/Product/Coffee/valeriia-miller.webp" alt="Vanilla Latte" />
            </div>
            <br />
            <p class="price"> $3.30</p>
            <p  class="productContent"> Vanilla Latte</p>
            <p style={{marginTop:-45 + "px"}}>The Vanilla Latte is the perfect blend of creamy vanilla and delicious coffee, with sweetness you'll love.</p>
            <br />
          </article>
          <article class="productInfo">
            <div id="3"> 
              <img src="img/Product/Coffee/tabitha-turner.webp" alt="Cold Brew" />
            </div>
            <br />
            <p class="price">$4.40 </p>
            <p class="productContent"> Cold Brew</p>
            <p style={{marginTop: -50+ "px"}}> Our Cold Brew
              is packed with delicious, creamy vanilla and coffee that will make your taste
              buds sing.</p>
            <br />
          </article>
        </div>
       
        <div class="productRow"> 
          <article class="productInfo">
            <div id="4"> 
              <img src="img/Product/Coffee/hazelnut.webp" alt="Hazelnut Latte" />
            </div>
            <br />
            <p class="price"> $4.99 </p>
            <p  class="productContent">Hazelnut Latte </p>
            <p style={{marginTop:-45 +"px", marginBottom: 22 +"px"}}> A perfect combination of sweet hazelnut and rich coffee flavor, this
              latte is sure to make you smile.</p>
            <br />
          </article>
          <article class="productInfo">
            <div id="5"> 
              <img src="img/Product/Coffee/caramel.webp" alt="Caramel Mocha Frappe" />
            </div>
            <br />
            <p class="price">$4.99 </p>
            <p class="productContent"> Caramel Mocha  Frappe</p>
            <p style={{marginTop:-50 + "px", marginBottom:-12 + "px"}}> This delicious frappe is a delicious combination of caramel and chocolate. The whipped cream topping topping gives it a decadent touch. </p>
            <br />
          </article>
          <article class="productInfo">
            <div id="6"> 
              <img src="img/Product/Coffee/iced-coffee.webp" alt="Iced Coffee" />
            </div>
            <br />
            <p class="price">$2.80 </p>
            <p class="productContent">Iced Coffee</p>
            <p style="margin-top: -20px; margin-bottom:45px;"> Try  our Iced Coffee! With a dark roast and a heavy cream, it's perfect for a morning caffeine rush.</p>
            <br />
          </article>
        </div>
        <div class="productRow"> 
          <article class="productInfo">
            <div id="7"> 
              <img src="img/Product/Coffee/espresso.webp" alt="Espresso" />
            </div>
            <br />
            <p class="price"> $4.00 </p>
            <p class="productContent">Espresso Mocha</p>
            <p style={{marginTop:-20 + "px"}}> This highly caffeinated, excellent tasting, chocolatey drink is perfect for those long study nights.</p>
            <br />
          </article>
          <article class="productInfo">
            <div id="8"> 
              <img src="img/Product/Coffee/mocha.webp" alt="Cappuccino" />
            </div>
            <br />
            <p class="price"> $3.99</p>
            <p class="productContent">Cappuccino</p>
            <p style={{marginTop:-45 + "px", marginBottom:-25 + "px"}}>With steamed milk, espresso, and foam, your morning coffee will be nothing short of perfect. The hot drink is sure to brighten your day!</p>
            <br />
          </article>
          <article class="productInfo">
            <div id="9"> 
              <img src="img/Product/Coffee/cocoa-bean-frappe.webp" alt="Cocoa Bean Frappe" />
            </div>
            <br />
            <p class="price"> $4.00 </p>
            <p class="productContent">Cocoa Bean Frappe</p>
            <p style={{marginTop:-45 + "px", marginBottom:-25 + "px"}}>Introducing the Coco Bean Frappe! This latte-style beverage is made with whipped topping, chocolate drizzle, and chocolate coffee taste.</p>
            <br />
          </article>
        </div>
      <br />
      </section>
    )
};

export default Coffee;