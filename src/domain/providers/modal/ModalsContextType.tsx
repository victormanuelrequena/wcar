type ModalsContextType = {
  openModalCustom: (size: 'lg'|'md'|'sm', title: string | undefined, content: any) => void;
  closeModalCustom: () => void;
  isOpenModalCustom: boolean;
  customModal: any | undefined;
  addToast: (message: string, type: "success" | "error" | "warning" | "alert" | "default", params: any) => void;
};


export default ModalsContextType;