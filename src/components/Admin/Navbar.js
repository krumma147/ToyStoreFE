import React from "react";
import { useAuth } from "../middleware/AuthContext";
const Navbar = () => {
    const { user } = useAuth();

    return(
        <nav class="navbar navbar-expand px-3 border-bottom">
                        <div class="mb-3">
                            <h4>Admin Page</h4>
                        </div>
                        <div class="navbar-collapse navbar">
                            <ul class="navbar-nav">
                                <li class="nav-item dropdown">
                                    <a href="#" data-bs-toggle="dropdown" class="nav-icon pe-md-0">
                                        <img src="/images/profile.jpg" class="avatar img-fluid rounded" alt="" />
                                        <p className="text-md-center">{user.username}</p>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-end">
                                        <a href="*" class="dropdown-item">Profile</a>
                                        <a href="*" class="dropdown-item">Setting</a>
                                        <a href="/login" class="dropdown-item">Logout</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
    )
}

export default Navbar;