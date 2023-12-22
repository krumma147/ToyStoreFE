import React from "react";
import Footer from './Footer';
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import BranchList from "../Branch/BranchList";
import CategoriesList from "../Category/CategoryList";
import Order from "../Shop/Order";
import ToyList from "../Toy/ToyList";

const Content = () => {
    return (
        <>    
        <div class="main">
            <Navbar />
                    <main class="content px-3 py-2">
                        <div class="container-fluid">
                            <Dashboard/>
                            {/* Content table here: Order List, Branch List, Category List, Toy */}
                            <div class="tab-content">
                                <div
                                    class="tab-pane"
                                    id="order"
                                    role="tabpanel"
                                    aria-labelledby="order-tab"
                                >
                                    <Order/>
                                </div>
                                <div
                                    class="tab-pane"
                                    id="branch"
                                    role="tabpanel"
                                    aria-labelledby="branch-tab"
                                >
                                    <BranchList/>
                                </div>
                                <div
                                    class="tab-pane"
                                    id="category"
                                    role="tabpanel"
                                    aria-labelledby="category-tab"
                                >
                                    <CategoriesList />
                                </div>
                                <div
                                    class="tab-pane"
                                    id="toy"
                                    role="tabpanel"
                                    aria-labelledby="toy-tab"
                                >
                                    <ToyList />
                                </div>
                            </div>
                        </div>
                    </main>
                    {/* <a href="#" class="theme-toggle">
                        <i class="fa-regular fa-moon"></i>
                        <i class="fa-regular fa-sun"></i>
                    </a> */}
                    <Footer/>
            </div>
        </>
    )
}

export default Content;