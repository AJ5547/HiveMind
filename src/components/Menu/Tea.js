const Tea = () => {
    return(
        <div>
        <div id="content">
        <section class="sidebar">
          <div id="menubar">

            <nav class="menu">
              <h2>Tea</h2>
              <hr />
              <ul>
                <li><a href="#1" title="Link"> Matcha Tea</a></li>
                <li><a href="#2" title="Link">Sweet Tea</a></li>
                <li><a href="#3" title="Link">Black Tea</a></li>
                <li class="notimp"><a href="#4"
                    title="Link">
                    Mint Tea </a>
                  
                </li>

                <li class="notimp">
                  <a href="#5" title="Link"> Bubble Tea</a>
                </li>
                <li class="notimp">
                  <a href="#6" title="Link"> Chai Tea</a> 
                </li>
                <li class="notimp"><a href="#7" title="Link"> Earl Gray</a></li>
                <li class="notimp">
                  <a href="#8" title="Link"> Iced Chai </a>
                </li>
                <li class="notimp"><a href="#9" title="Link"> Iced Matcha</a>  </li>
                <li class="notimp">
                  <a href="#ten" title="Link"> Arnold Palmer</a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
        <section class="mainContent">
          <div class="productRow">       
            <article class="productInfo">
              <div id="1">
                <img src="img/Product/Tea/ann.webp" alt="" />
              </div>
              <br />
              <p class="price"> $5.99 </p>
              <p class="productContent"> Matcha Tea</p>
              <p style={{marginTop:-45 +"px"}}> Enjoy our
                delicious and soothing Matcha Tea Latte to help you relax and unwind.</p>
              <br />
            </article>
            <article class="productInfo">
              <div id="2">
                <img src="img/Product/Tea/akhilesh-sharma.webp" alt="" />
              </div>
              <br />
              <p class="price"> $2.15</p>
              <p class="productContent"> Sweet Tea</p>
              <p style={{marginTop:-45 + "px"}}> Our sweet tea has a simple blend of sugar, and black tea. A perfect drink for summertime.</p>
              <br />
            </article>
            <article class="productInfo">
              <div id="3">
                <img src="img/Product/Tea/lucas-george-wendt.webp" alt="" />
              </div>
              <br />
              <p class="price">$2.10 </p>
              <p class="productContent"> Black Tea </p>
              <p style={{marginTop:-45 +"px"}}> This drink doesn't have much in it, besides a simple black tea blend, and some lemon, its absolutely perfect for any occasion.</p>
              <br  />
            </article>
          </div>

          <div class="productRow">
            <article class="productInfo">
              <div id="4">
                <img src="img/Product/Tea/arnold-palmer.webp" alt="" />
              </div>
              <br />
              <p class="price"> $2.95 </p>
            
              <p class="productContent"> Arnold Palmer- Iced Tea Lemonade</p>
              <p style={{marginTop: -55 +" px"}}>Our creamy, layered combo of iced tea and lemonade will
                quench your thirst and keep you coming back for more.</p>
              <br />
            </article>
            <article class="productInfo">
              <div id="5">
                <img src="img/Product/Tea/rodnae-productions.webp" alt="" />
              </div>
              <br />
              <p class="price">$5.80 </p>
              <p class="productContent"> Bubble Tea</p>
              <p style={{marginTop: -50 +"px"}}> Our unique blend of creamy milk tea combined with br /own
                sugar and tapioca pearls gives you the perfect mix of texture and flavor.</p>
              <br />
            </article>
            <article class="productInfo">
              <div id="6">
                <img src="img/Product/Tea/ben-moreland.webp" alt="" />
              </div>
              <br />
              <p class="price">$4.15 </p>
              <p class="productContent">Chai</p>
              <p style={{marginTop:-45 + "px"}}> This tea is rich and milky, deeply coloured, steaming hot, flavourful and sweet.</p>
              <br />
            </article>
          </div>
          <div class="productRow">
            <article class="productInfo">
              <div id="7">
                <img src="img/Product/Tea/miska-sage.webp" alt="" />
              </div>
              <br />
              <p class="price"> $4.15 </p>
              <p class="productContent">Earl Gray</p>
              <p style={{marginTop:-45 +"px"}}> Our earl gray is a premium blend, you will absolutely enjoy the smell of citrus as you sip on your deliciously sweet drink.</p>
              <br />
            </article>
            <article class="productInfo">
              <div id="8">
                <img src="img/Product/Tea/claire-kelly.webp" alt="" />
              </div>
              <br />
              <p class="price"> $4.60</p>
              <p class="productContent">Iced Chai</p>
              <p style={{marginTop: -45 +"px"}}> A mixture of sugar, honey flavored syrup, chai concentrate and milk. You will absolutely love this chilled drink.</p>
              <br />
            </article>
            <article class="productInfo">
              <div id="9">
                <img src="img/Product/Tea/bakd-raw.webp" alt="" />
              </div>
              <br />
              <p class="price"> $2.15 </p>
              <p class="productContent">Iced Matcha Latte</p>
              <p style={{marginTop: -45 +"px"}}> Classic Matcha tea with added sweetener, cream, and ice. Its a perfect blend of all to make a sweet drink.</p>
              <br />
            </article>
          </div>
          
          <br />
        </section>
        </div>

        </div>
    )
}

export default Tea;