import React from "react";
import { ToastContainer } from "react-toastify";
import ModalsComponentProps from "./ModalsComponentProps";
import 'react-toastify/dist/ReactToastify.css';
import './ModalsStyles.scss';
import ModalCustomComponent from "./custom/ModalCustomComponent";

const ModalsComponent: React.FC<ModalsComponentProps> = ({ children }) => {

    return <div className="modals_component">
        <ModalCustomComponent />
        <ToastContainer position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light" />
        {children}
    </div>
}


export default ModalsComponent;