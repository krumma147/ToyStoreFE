import React from 'react';

const Nav = () => {
    return(
        <div class = "row">
            <ul class="nav justify-content-center  ">
                <li class="nav-item">
                    <a class="nav-link active" href="/users" aria-current="page">
                        Account
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/manage">Manage</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="/">Disabled link</a>
                </li>
            </ul>
        </div>
    )
}
export default Nav;
