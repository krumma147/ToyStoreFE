import React from 'react';
import { useAuth } from '../middleware/AuthContext';

const Header = () => {
    const { user } = useAuth();
    console.log(user);
    return(
        <>
            <nav class="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

                <div class="container">
                    <a class="navbar-brand" href="/">Lego<span>.</span></a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarsFurni">
                        <ul class="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                            <li class="nav-item active">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li><a class="nav-link" href="/toys">Shop</a></li>
                            <li><a class="nav-link" href="/about">About us</a></li>
                            <li><a class="nav-link" href="*">Services</a></li>
                            <li><a class="nav-link" href="*">Blog</a></li>
                            <li><a class="nav-link" href="*">Contact us</a></li>
                        </ul>

                        <ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                            {user ? (
                                <>
                                    <li class="nav-item dropdown">
                                        <a className="nav-link" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {user.name}
                                        </a>
                                        
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a class="dropdown-item" href="#">User Detail</a></li>
                                            <li><a class="dropdown-item" href="#">Another action</a></li>
                                            <li><hr class="dropdown-divider"/></li>
                                            <li><a class="dropdown-item" href="#">Log out</a></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <a className="nav-link" href="cart.html">
                                        <img src="/images/cart.svg" alt="" />
                                    </a>
                                </li>
                                </>
                            ) : (
                                <>
                                <li>
                                    <a className="nav-link" href="/login">
                                    <img src="/images/user.svg" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="cart.html">
                                    <img src="/images/cart.svg" alt="" />
                                    </a>
                                </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
                
            </nav>
        </>
    )
}

export default Header;

