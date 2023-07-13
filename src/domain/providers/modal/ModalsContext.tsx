import React from "react";
import ModalsContextType from "./ModalsContextType";

const ModalsContext = React.createContext<ModalsContextType>({
    openModalCustom: (size: "lg" | "md" | "sm", title: string | undefined, content: any) => { },
    closeModalCustom: () => { },
    isOpenModalCustom: false,
    customModal: undefined,
    addToast: (message: string, type: "success" | "error" | "warning" | "alert" | "default", params: any) => { },
});

export default ModalsContext;