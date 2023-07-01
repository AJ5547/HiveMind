const Food = () =>{
    return(
        <div>
        <div id="content">
        <section className="sidebar">
          <div id="menubar">

            <nav className="menu">
              <h2>Food</h2>
              <hr />
              <ul>
                <li><a href="#Cinna" title="Link"> Cinnamon Muffins</a></li>
                <li><a href="#ChocoChip" title="Link">Chocolate Cookies</a></li>
                <li><a href="#ChocoMuff" title="Link">Chocolate Muffins</a></li>
                <li className="notimp"><a
                    href="#CranMuff" title="Link">
                    Cranberry Muffins</a>
                </li>

                <li className="notimp">
                  <a href="#SugCook" title="Link"> Sugar Cookies</a>
                </li>
                <li className="notimp">
                  <a href="#BlueMuff" title="Link"> Blueberry Muffins</a>
                </li>
                <li className="notimp"><a href="#PB" title="Link"> PB Blossoms</a></li>
                <li className="notimp">
                  <a href="#ChocoChipMuff" title="Link"> Chocolate Chip</a>
                </li>
                <li className="notimp"><a href="#Macarons" title="Link"> Macarons</a></li>
                <li className="notimp">
                  <a href="#DoubChocoMuff" title="Link"> Double Choloate Muffins</a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
        <section className="mainContent">
          <div className="productRow">
            <article className="productInfo">
              <div id="Cinna">
                <img src="img/Product/Food/alina-karpenko.webp" alt=" Cinnamon Muffin" />
              </div>
              <br /> 
              <p className="price"> $1.99 </p>
              <p className="productContent"> Cinnamon Muffin</p>
              <p style={{marginTop:-45 +"px"}}>Our moist, soft cinnamon muffins deliver an unbeatable taste that will make your mouth water.</p>
              <br /> 

            </article>
            <article className="productInfo">
              <div id="ChocoChip">
                <img src="img/Product/Food/american-heritage.webp" alt="Chocolate cookies" />
              </div>
              <br />
              <p className="price"> $0.99</p>
              <p className="productContent"> Chocolate Cookies</p>
              <p style={{marginTop: -45 +"px"}}>Our delicious cookies are made with real chocolate and a crunchy almond inside, making them the perfect indulgence.</p>
              <br /> 

            </article>
            <article className="productInfo">
              <div id="ChocoMuff">
                <img src="img/Product/Food/ari-spada.webp" alt="Chocolate Muffins" />
              </div>
              <br />
              <p className="price">$1.99 </p>
              <p className="productContent"> Chocolate Muffins</p>
              <p style={{marginTop:-45 +"px"}}>Enjoy a delicious and moist treat, crafted with the finest ingredients and just the right amount of sweetness</p>
              <br />

            </article>
          </div>

          <div className="productRow">
            <article className="productInfo">
              <div id="CranMuff">
                <img src="img/Product/Food/fallon-michael.webp" alt="Cranberry Muffins" />
              </div>
              <br />
              <p className="price"> $1.99 </p>
              <p className="productContent"> Cranberry Muffins</p>
              <p style={{marginTop:-50 +"px"}}>Made with almond extract, topped with powered sugar glaze, these mouth-watering muffins will leave you wanting more.</p>
              <br /> 

            </article>
            <article className="productInfo">
              <div id="SugCook">
                <img src="img/Product/Food/project-290.webp" alt="Sugar Cookies" />
              </div>
              <br />
              <p className="price">$1.99 </p>
              <p className="productContent"> Sugar Cookies</p>
              <p style={{marginTop:-30+"px"}}> Our cookie is jumbo-sized, baked to perfection and topped with a special
                frosting.</p>

            </article>
            <article className="productInfo">
              <div id="BlueMuff">
                <img src="img/Product/Food/joshua-flores.webp" alt="Blueberry Muffins" />
              </div>
              <br />
              <p className="price">$1.99 </p>
              <p className="productContent"> Blueberry Muffins</p>
              <p style={{marginTop: -45 +"px"}}>Our freshly-baked muffins are made with rich, wild blueberry puree and a hint of real vanilla.</p>
              <br /> 

            </article>
          </div>
          <div className="productRow">
            <article className="productInfo">
              <div id="PB">
                <img src="img/Product/Food/madison-kaminski.webp" alt="PB Blossoms" />
              </div>
              <br />
              <p className="price"> $1.50 </p>
              <p className="productContent"> PB Blossoms</p>
            <p style={{marginTop: -45 +"px"}}> PB Blossoms are a delicious combination of Hershey Kisses, peanut butter, and cookie that will make your mouth water.</p>
              <br /> 

            </article>
            <article className="productInfo">
              <div id="ChocoChipMuff">
                <img src="img/Product/Food/michael-chiara.webp" alt="Chocolate Chip Muffins" />
              </div>
              <br />
              <p className="price"> $0.99</p>
              <p className="productContent"> Chocolate Chip Muffins</p>
              <p style={{marginTop: -45 + "px"}}>  Deliciously soft and fluffy, they're made with the highest-quality ingredients, including real dark chocolate chips. </p>

            </article>
            <article className="productInfo">
              <div id="Macarons">
                <img src="img/Product/Food/heather-barnes.webp" alt="Macarons" />
              </div>
              <br />
              <p className="price"> $3 </p>
              <p className="productContent"> Macarons</p>
              <p style={{marginTop: -50 + "px"}}> Our unique,
                coconut-flavored macrons come in your choice of color, delicious and fresh.</p>
              <br />

            </article>
          </div>
          <div className="productRow">
            <article className="productInfo">
              <div id="DoubChocoMuff">
                <img src="img/Product/Food/oriol-portell.webp" alt="Double Chocolate Muffin" />
              </div>
              <br />
              <p className="price"> $1.99</p>
              <p className="productContent"> Double Chocolate Muffins</p>
              <p style={{marginTop:-45 +"px"}}> Enjoy the moist, rich, and chocolatey goodness loaded with chocolate chips in every bite</p>
              <br />
            </article>
          </div>
          <br />
        </section>
        </div>
        </div>

    )
}

export default Food;