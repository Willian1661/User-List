import React, { ReactNode } from "react";
import User from "../interfaces/Users";
interface props {
    title: ReactNode,
    data: User[]
    // Record<string, any>
}
const ModalAddress: React.FC<props> = ({ title, data }) => {

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
        const modal = document.getElementById("show-modal-address");
        const modalButton = document.getElementById("modal-address");

        modalButton.addEventListener("click", (event) => {
            event.stopPropagation();
            modal.classList.add("is-active");
        });
        closeAllModals();
    }, []);


    const printTableTB = (dataTobBottom: User[]) => {
        return (
            Object.keys(dataTobBottom[0].address)
                .map(key => (
                    <th key={key}>{key.toUpperCase()}</th>)
                )
        )
    };


    return (
        <div id="modal-address" className="container is-fullhd is-flex">
            {title}
            <span className="ml-auto mr-2 justify-content">
                <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
            <div id="show-modal-address" className="modal">
                <div className="modal-background"></div>
                <div className="modal-content">
                    <table className="table is-bordered is-striped is-hoverable is-fullwidth ">
                        <thead>
                            <tr>
                                {printTableTB(data)}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(dataValue => (
                                <tr className="has-text-weight-normal" key={dataValue.id}>
                                    <td>{dataValue.address.street}</td>
                                    <td>{dataValue.address.suite}</td>
                                    <td>{dataValue.address.city}</td>
                                    <td>{dataValue.address.zipcode}</td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr>
                                {printTableTB(data)}
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <button className="modal-close is-large" aria-label="close"></button>
            </div>
        </div>
    );
};
export default ModalAddress;