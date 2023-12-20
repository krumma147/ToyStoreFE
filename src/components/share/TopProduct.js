import React from "react";

const TopProduct = () => {
    return(
        <div class="product-section">
			<div class="container">
				<div class="row">

					<div class="col-md-12 col-lg-3 mb-5 mb-lg-0">
						<h2 class="mb-4 section-title">Crafted with excellent material.</h2>
						<p class="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. </p>
						<p><a href="shop.html" class="btn-c">Explore</a></p>
					</div> 

					<div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<a class="product-item" href="cart.html">
							<img src="images/products/lego3.png" class="img-fluid product-thumbnail" alt="" />
							<h3 class="product-title">Yoda's Jedi Starfighter</h3>
							<strong class="product-price">$50.00</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid" alt="" />
							</span>
						</a>
					</div> 

					<div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<a class="product-item" href="cart.html">
							<img src="images/products/lego4.png" class="img-fluid product-thumbnail" alt="" />
							<h3 class="product-title">Expecto Patronum</h3>
							<strong class="product-price">$78.00</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid" alt="" />
							</span>
						</a>
					</div>

					<div class="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
						<a class="product-item" href="cart.html" >
							<img src="images/products/lego5.png" class="img-fluid product-thumbnail" alt="" />
							<h3 class="product-title">Explorer Diving Boat</h3>
							<strong class="product-price">$43.00</strong>

							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid" alt="" />
							</span>
						</a>
					</div>

				</div>
			</div>
		</div>
    )
}

export default TopProduct;