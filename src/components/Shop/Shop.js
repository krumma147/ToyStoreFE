import React  from "react";
import Header from "../share/Header";
import ProductView from "./Products";
import Footer from "../share/Footer";

const Shop = ({toys}) => {

    return(
        <>
            <Header />

            <div className="row">
                {/* <div class="col col-md-3">
                    <SideNav categories={categories} onCategorySelect={handleCategorySelect} />
                </div> */}

                <div className="col">
                    <ProductView toys={toys} />
                </div>

                {/* <div class="col col-md-2">
                    Ads
                </div> */}
            </div>
            
            <Footer />
        </>
    )
}

export default Shop;