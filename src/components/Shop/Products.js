import React from "react";

const ProductView = ({toys}) => {

    return(
        <div class="untree_co-section product-section before-footer-section">
		    <div class="container">
		      	<div class="row">
                    {toys.length > 0 ? "" : (<h2>There's no toy yet :'( </h2>)}
                    {toys?.map((toy) =>(
                        <div class="col-12 col-md-4 col-lg-3 mb-5">
                            <a class="product-item" href={`/toys/${toy._id}`}>
                                <img src={toy.image === "" ? "images/products/uhoh.png" : `images/products/${toy.image}`} 
                                class="img-fluid product-thumbnail rounded" alt="" />
                                <h3 class="product-title">{toy.name}</h3>
                                <strong class="product-price">{toy.price} VND</strong>

                                <span class="icon-cross">
                                    <img src="images/cross.svg" class="img-fluid" alt="" />
                                </span>
                            </a>
					    </div> 
                    ))}
		      	</div>
		    </div>
		</div>
    )
}

export default ProductView;