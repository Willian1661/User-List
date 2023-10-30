import React from "react";

const Nav: React.FC = () => (
    <nav className="navbar is-link px-6 is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a className="navbar-item" href="/">
                <i className="fas fa-users fa-2xl"></i>
                <h1 className="title is-4 px-2">User List</h1>
            </a>

            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBurguer">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBurguer" className="navbar-menu">
            <div className="navbar-start">
                <div className="navbar-item display: flex;"></div>
            </div>

            <div className="navbar-end">
                <div className="navbar-item display: flex;">
                    <input className="input is-small pr-6" type="text" placeholder="Search" />
                    <button className="button is-small is-info is-hovered">
                        <i className="fas fa-magnifying-glass"></i>
                    </button>
                </div>
            </div>
        </div>
    </nav>
);
export default Nav;