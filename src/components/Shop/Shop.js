import React, { useState, useEffect } from "react";
import Header from "../share/Header";
import ProductView from "./Products";
import Footer from "../share/Footer";

const Shop = ({toys}) => {
    const [searchToys, setSearchToys] = useState([]);
    const [searchKey, setSearchKey] = useState("");

    useEffect(() => {
        if (searchKey !== "") {
          let foundToys = toys.filter((toy) =>
            toy.name.toLowerCase().includes(searchKey.toLowerCase())
          );
          setSearchToys(foundToys);
        } else {
          setSearchToys(toys);
        }
      }, [searchKey, toys]);
      
    return(
        <>
            <Header />
            
            <div className="row mt-4 justify-content-md-center">
                <div className="col-md-6">
                    <div class="input-group rounded">
                        <input type="text" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon"
                            onChange={(e)=>setSearchKey(e.target.value)}
                        />
                        <span class="input-group-text border-0" id="search-addon">
                            <i class="fas fa-search"></i>
                        </span>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <ProductView toys={searchToys} />
                </div>
            </div>
            
            <Footer />
        </>
    )
}

export default Shop;