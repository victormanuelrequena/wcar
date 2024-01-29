import { FC } from "react";
import SliderComponent from "../slider/SliderComponent";
import Icons from '../../assets/Icons';
import CardServiceComponent from "../../pages/home/components/cardService/CardServiceComponent";

const FinancingServicesLineComponent: FC<{}> = () => {

    return <section className="financing_services_line_component py-5 user-select-none">
        <div className="container col-md-9">
            <SliderComponent>
                <div>
                    <div className="row">
                        <div className="col-md-4 my-3">
                            <CardServiceComponent title="1. Simulación" description="Haz la simulación de las cuotas del crédito para el carro que estás comprando." image='/assets/icons/currency.svg'></CardServiceComponent>
                        </div>
                        <div className="col-md-4 my-3">
                            <CardServiceComponent title="2. Diligencia solicitud" description="Diligencia y firma la solicitud del crédito en línea." image='/assets/icons/computer.svg'></CardServiceComponent>
                        </div>
                        <div className="col-md-4 my-3">
                            <CardServiceComponent title="3. Documentación" description="Completa los documentos para enviar a un estudio de crédito." image='/assets/icons/person.svg'></CardServiceComponent>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="row">
                        <div className="col-md-4 my-3">
                            <CardServiceComponent title="4. Crédito" description="Escoge el crédito que más te convenga y firma la documentación." image='/assets/icons/money.svg'></CardServiceComponent>
                        </div>
                        <div className="col-md-4 my-3">
                            <CardServiceComponent title="5. Desembolso" description="Espera el desembolso del banco, y empieza a disfrutar de tu nuevo carro." image='/assets/icons/person.svg'></CardServiceComponent>
                        </div>
                    </div>
                </div>
            </SliderComponent>
        </div>
    </section>
}

export default FinancingServicesLineComponent;