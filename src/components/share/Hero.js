import React from "react";

const Hero = () => {
    return(
        <div class="hero">
		    <div class="container">
				<div class="row justify-content-between">
					<div class="col-lg-5">
						<div class="intro-excerpt">
							<h1>Modern Interior <span clsas="d-block">Design Studio</span></h1>
							<p class="mb-4">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
							<p><a href="/toys" class="btn-c btn-c-secondary me-2">Shop Now</a><a href="/toys" class="btn-c btn-c-white-outline">Explore</a></p>
						</div>
					</div>
					<div class="col-lg-7">
						<div class="hero-img-wrap">
							<img src="images/hero.png" class="img-fluid" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Hero;