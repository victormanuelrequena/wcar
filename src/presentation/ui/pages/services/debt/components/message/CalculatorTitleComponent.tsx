import { FC } from "react";

const CalculatorTitleComponent:FC<{}> = () => {
    return <> <div className="side side_top side_blue_neon">
        <h2 className="h1 text_black text_bold">
            Calcula tu <span className="fw-lighter text_italic">préstamo</span></h2>
    </div >
        <p className="text_light mb-4">Nada como saber desde el primer momento cuanto debes pagar mensual. Conoce el valor de tu cuota con estos datos, de manera fácil y sencilla.</p></>
}

export default CalculatorTitleComponent;