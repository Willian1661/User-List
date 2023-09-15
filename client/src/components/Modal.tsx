import React, { ReactNode } from "react"
interface props {
    children: ReactNode
}
const Modal: React.FC<props> = ({ children }) => {

    const closeModal = (el: any) => {
        el.classList.remove('is-active');
    }

    const closeAllModals = () => {
        (document.querySelectorAll('.modal-background, .modal-close') || []).forEach((close) => { //.modal-card-head .delete, .modal-card-foot
            const target = close.closest('.modal'); // select the closest elements inside of modal div

            close.addEventListener('click', () => {
                closeModal(target);
            });
        });
    }
    React.useEffect(() => {
        const modal = document.getElementById('modal')
        const modalButton = document.getElementById('modal-button')
        modalButton.addEventListener('click', () => modal.classList.add('is-active'))
        closeAllModals(); // close all modals
    }, []);

    return (
        <div className="block">
            <button id="modal-button" className="button is-primary modal-button">
                {children}
            </button>
            <div id="modal" className="modal">
                <div className="modal-background"></div>
                <div className="modal-content">
                    <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth ">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th><abbr title="UserName">UN</abbr></th>
                                <th><abbr title="Email">E</abbr></th>
                                <th><abbr title="Adress">Add</abbr><i className="fas fa-angle-down mx-3" aria-hidden="true"></i></th>
                                <th><abbr title="Phone">PH</abbr></th>
                                <th><abbr title="WebSite">WB</abbr></th>
                                <th><abbr title="Company">CO</abbr><i className="fas fa-angle-down mx-3" aria-hidden="true"></i></th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <button className="modal-close is-large" aria-label="close"></button>
            </div>
        </div>
    );
}
export default Modal;