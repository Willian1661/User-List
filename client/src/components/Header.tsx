import React from "react";

const Nav: React.FC = () => {
    return (
        <div className="container is-fluid has-background-link">

            <nav className="navbar is-link" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <div className="navbar-item">
                            <div className="field">
                                <div className="control has-icons-left">
                                    <input className="input is-small" type="text" placeholder="Search" />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-magnifying-glass"></i>
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary">
                                    <strong>Sign up</strong>
                                </a>
                                <a className="button is-light">
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};
export default Nav;