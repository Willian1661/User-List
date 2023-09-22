import React, { ReactNode } from "react";
interface props {
    children: ReactNode,
    data: Record<string, any>
}
const ModalAddress: React.FC<props> = ({ children, data }) => {

    const closeAllModals = () => {
        const modalFeatures = document.querySelectorAll(".modal-background, .modal-close");//.modal-card-head .delete, .modal-card-foot

        modalFeatures.forEach(modalElement => {
            const target = modalElement.closest(".modal");// select the closest elements inside of modal div
            modalElement.addEventListener("click", (event) => {
                event.stopPropagation();
                target.classList.remove("is-active");
            });

            document.addEventListener("keyup", (event) => {
                if (event.key == "Escape") {
                    target.classList.remove("is-active");
                }
            });
        });
    };

    React.useEffect(() => {
        const modal = document.getElementById("modal");
        const modalButton = document.getElementById("modalAddress");

        modalButton.addEventListener("click", (event) => {
            event.stopPropagation();
            modal.classList.add("is-active");
        });
        closeAllModals();
    }, []);

    return (
        <div id="modalAddress" className="container is-fullhd is-flex">
            {children}
            <span className="ml-auto mr-2 justify-content">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
            <div id="modal" className="modal">
                <div className="modal-background"></div>
                <div className="modal-content">
                    <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth ">
                        <thead>
                            <tr>
                                {
                                    Object.keys(data).map(key => <th key={key}>{key}</th>)
                                }
                            </tr>
                        </thead>
                    </table>
                </div>
                <button className="modal-close is-large" aria-label="close"></button>
            </div>
        </div>
    );
};
export default ModalAddress;