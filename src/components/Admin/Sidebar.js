import React from "react";

const Sidebar = () => {
    return(
        <aside id="sidebar">
                    <div class="h-100">
                        <div class="sidebar-logo">
                            <a href="/">Lego</a>
                        </div>
                        <ul class="sidebar-nav">
                            <li class="sidebar-header">
                                Admin Form
                            </li>
                            <li class="sidebar-item">
                                <a href="/admin" class="sidebar-link">
                                    <i class="fa-solid fa-list pe-2"></i>
                                    Dashboard
                                </a>
                            </li>
                            <li class="sidebar-item">
                                <a class="sidebar-link collapsed" data-bs-target="#pages" data-bs-toggle="collapse"
                                    aria-expanded="false"><i class="fa-solid fa-file-lines pe-2"></i>
                                    Management
                                </a>
                                <ul class="sidebar-dropdown list-unstyled collapse" id="pages" role="tablist" data-bs-parent="#sidebar">
                                    <li class="sidebar-item" role="presentation">
                                        <a
                                            class="sidebar-link"
                                            id="order-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#order"
                                            role="tab"
                                            aria-controls="home"
                                            aria-selected="true"
                                        >Order</a>
                                    </li>
                                    <li class="sidebar-item" role="presentation">
                                        <a
                                            class="sidebar-link"
                                            id="branch-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#branch"
                                            role="tab"
                                            aria-controls="branch"
                                            aria-selected="false"
                                        >
                                            Branches
                                        </a>
                                    </li>
                                    <li class="sidebar-item" role="presentation">
                                        <a
                                            class="sidebar-link"
                                            id="category-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#category"
                                            role="tab"
                                            aria-controls="category"
                                            aria-selected="false"
                                        >
                                            Categories
                                        </a>
                                    </li>
                                    <li class="sidebar-item" role="presentation">
                                        <a
                                            class="sidebar-link"
                                            id="toy-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#toy"
                                            role="tab"
                                            aria-controls="toy"
                                            aria-selected="false"
                                        >
                                            Toys
                                        </a>
                                    </li>
                                    <li class="sidebar-item" role="presentation">
                                        <a
                                            class="sidebar-link"
                                            id="user-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#user"
                                            role="tab"
                                            aria-controls="user"
                                            aria-selected="false"
                                        >
                                            Users
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            {/* <li class="sidebar-item">
                                <a href="#" class="sidebar-link collapsed" data-bs-target="#auth" data-bs-toggle="collapse"
                                    aria-expanded="false"><i class="fa-regular fa-user pe-2"></i>
                                    Auth
                                </a>
                                <ul id="auth" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                                    <li class="sidebar-item">
                                        <a href="#" class="sidebar-link">Login</a>
                                    </li>
                                    <li class="sidebar-item">
                                        <a href="#" class="sidebar-link">Register</a>
                                    </li>
                                </ul>
                            </li> */}
                            {/* <li class="sidebar-header">
                                Multi Level Menu
                            </li> */}
                            {/* <li class="sidebar-item">
                                <a href="#" class="sidebar-link collapsed" data-bs-target="#multi" data-bs-toggle="collapse"
                                    aria-expanded="false"><i class="fa-solid fa-share-nodes pe-2"></i>
                                    Multi Dropdown
                                </a>
                                <ul id="multi" class="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
                                    <li class="sidebar-item">
                                        <a href="#" class="sidebar-link collapsed" data-bs-target="#level-1"
                                            data-bs-toggle="collapse" aria-expanded="false">Level 1</a>
                                        <ul id="level-1" class="sidebar-dropdown list-unstyled collapse">
                                            <li class="sidebar-item">
                                                <a href="#" class="sidebar-link">Level 1.1</a>
                                            </li>
                                            <li class="sidebar-item">
                                                <a href="#" class="sidebar-link">Level 1.2</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                
                            </li> */}
                        </ul>
                    </div>
                </aside>
    )
}

export default Sidebar;