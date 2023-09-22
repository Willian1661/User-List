import React from "react";

const DropDown = () => {

    React.useEffect(() => {
        const dropId = document.getElementById("dropid");
        const dropDownButton = document.getElementById("dropDownButton");
        dropDownButton.addEventListener("click", () => dropId.classList.toggle("is-active"));
    }, []);

    return (
        <div className="dropdown" id="dropid">
            <div className="dropdown-trigger">
                <button
                    className="button"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu"
                    id="dropDownButton">
                    <span>Dropdown button</span>
                    <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                    <a href="/" className="dropdown-item">
                        Dropdown item
                    </a>
                    <a className="dropdown-item">
                        Other dropdown item
                    </a>
                    <a href="/" className="dropdown-item is-active">
                        Active dropdown item
                    </a>
                    <a href="/" className="dropdown-item">
                        Other dropdown item
                    </a>
                    <hr className="dropdown-divider" />
                    <a href="/" className="dropdown-item">
                        With a divider
                    </a>
                </div>
            </div>
        </div>
    );
};
export default DropDown;