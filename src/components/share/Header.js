import React from 'react';
import { useAuth } from '../middleware/AuthContext';

const Header = () => {
    const { user, logout } = useAuth();
    const handleLogout = () => {
        if(window.confirm('Are you sure you want to logout?')){
            logout();
        }
    }
    
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
                        </ul>

                        <ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                            {user.username? (
                                <>
                                    <li class="nav-item dropdown">
                                        <button className="nav-link" id="navbarDropdown" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {user.username}
                                        </button>
                                        
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><p class="dropdown-item" href="*">User Detail</p></li>
                                            <li><a class="dropdown-item" href="/orders">Order</a></li>
                                            {user.role === 'admin' ? (
                                                <>
                                                    <li><a class="dropdown-item" href="/admin">Admin Page</a></li>
                                                    {/* <li><a class="dropdown-item" href="/users">UserList</a></li>
                                                    <li><a class="dropdown-item" href="/toys/list">Toy List</a></li>
                                                    <li><a class="dropdown-item" href="/branches">Branches</a></li>
                                                    <li><a class="dropdown-item" href="/categories">Categories</a></li> */}
                                                </>
                                            ): null}
                                            <li><hr class="dropdown-divider"/></li>
                                            <li><button class="dropdown-item" onClick={handleLogout}>Log out</button></li>
                                        </ul>
                                    </li>

                                    <li>
                                        <a className="nav-link" href="/cart">
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
                                    <a className="nav-link" href="/orders">
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

