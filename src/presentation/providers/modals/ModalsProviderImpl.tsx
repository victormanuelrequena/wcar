import React from 'react';
import { toast, ToastContainer, ToastOptions } from 'react-toastify';
import ModalsContext from '../../../domain/providers/modal/ModalsContext';
import ProviderProps from '../../../domain/providers/ProviderProps';
import ModalsContextType from '../../../domain/providers/modal/ModalsContextType';
import ModalsProvider from '../../../domain/providers/modal/ModalsProvider';
import ModalsComponent from './modals/ModalsComponent';

const _Actions: ModalsContextType = {
    isOpenModalCustom: false,
    openModalCustom: (size: "lg" | "md" | "sm", title: string | undefined, content: any) => { },
    closeModalCustom: () => { },
    customModal: undefined,
    addToast: (message: string, type: "success" | "error" | "warning" | "alert" | "default", params: any) => { },
};
const _Provider: React.FC<ProviderProps> = ({ children }) => {
    const [customModal, _setCustomModal] = React.useState<any | undefined>(undefined);
    const openModalCustom = (size: string, title: string | undefined, content: any) => _setCustomModal({ content, title, size });
    const closeModalCustom = () => _setCustomModal(undefined);
    const isOpenModalCustom = customModal != undefined;

    const addToast = (message: string, type: "success" | "error" | "warning" | "default" | "alert", params: any) => {
        const paramsToast: ToastOptions<{}> = {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        };
        if (type == "success") toast.success(message, paramsToast);
        if (type == "error") toast.error(message, paramsToast);
        if (type == "alert") {
            paramsToast.autoClose = false;
            paramsToast.hideProgressBar = true;
            paramsToast.theme = "colored";
            paramsToast.data = params;
            toast.error(message, paramsToast);
        }
        if (type == "warning") toast.warning(message, paramsToast);
        if (type == "default") toast(message, paramsToast);
    };

    _Actions.isOpenModalCustom = isOpenModalCustom;
    _Actions.openModalCustom = openModalCustom;
    _Actions.closeModalCustom = closeModalCustom;
    _Actions.customModal = customModal;
    _Actions.addToast = addToast;


    return <ModalsContext.Provider
        value={{
            isOpenModalCustom, openModalCustom, closeModalCustom, customModal,
            addToast
        }}>
        <ModalsComponent>
            {children}
        </ModalsComponent>
    </ModalsContext.Provider>;
}

console.log('set actions', _Actions);

class ModalsProviderImpl implements ModalsProvider {
    public context = ModalsContext;
    public Provider = _Provider;
    Actions = _Actions
}

export default new ModalsProviderImpl();