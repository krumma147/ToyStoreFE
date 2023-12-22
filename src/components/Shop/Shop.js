import React  from "react";
import Header from "../share/Header";
import ProductView from "./Products";
import Footer from "../share/Footer";

const Shop = ({toys}) => {

    return(
        <>
            <Header />

            <div className="row">
                <div className="col">
                    <ProductView toys={toys} />
                </div>
            </div>
            
            <Footer />
        </>
    )
}

export default Shop;